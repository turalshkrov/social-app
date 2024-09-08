const express = require("express");
const User = require("../models/User");
const userValidationRules = require("../validation rules/userValidationRules");
const userUpdateValidationRules = require("../validation rules/userUpdateValidationRules");
const usernameValidationRules = require("../validation rules/usernameValidationRules");
const passwordValidationRules = require("../validation rules/passwordValidationRules");
const validation = require("../middlewares/validation/validation");
const checkEmail = require("../middlewares/user/checkEmail");
const crypto = require("crypto");
const bcyrpt = require("bcryptjs");
const authenticationToken = require("../middlewares/auth/authenticationToken");
const mongoose = require("mongoose");
const router = express.Router();

router.post(
    "/register",
    userValidationRules(),
    validation,
    checkEmail,
    async (req, res) => {
        try {
            const { name, username, email, password } = req.body;

            const otpCode = crypto.randomInt(1000, 9999).toString();
            const otpExpiry = new Date(Date.now() + 30 * 60 * 1000);

            const newUser = new User({
                name,
                username,
                email,
                password,
                otpCode,
                otpExpiry,
            });
            await newUser.save();

            res.status(201).json({ message: "Verify email address" });
        } catch (error) {
            res.status(500).json(error);
        }
    }
);

router.post(
    "/check-username",
    usernameValidationRules(),
    validation,
    async (req, res) => {
        try {
            const { username } = req.body;
            const user = await User.findOne({ username });

            if (user)
                return res
                    .status(400)
                    .json({ message: "Username is already taken" });

            res.status(200).json({ message: "OK" });
        } catch (error) {
            res.status(500).json(error);
        }
    }
);

router.post("/email-verify", async (req, res) => {
    try {
        const { email, otpCode } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.status(404).json({ message: "User not found" });

        if (user.otpCode === otpCode && user.otpExpiry > Date.now()) {
            user.isActive = true;
            user.otpCode = null;
            user.otpExpiry = null;
            await user.save();

            return res.json({ message: "Email verified successfully" });
        }
        return res.status(400).json({ message: "Invail or expired OTP" });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post("/resend-otp", async (req, res) => {
    try {
        const { email } = req.body;
        const user = User.findOne({ email });

        if (!user || user.isActive)
            return res
                .status(404)
                .json({ message: "User not found or already verified" });

        const otpCode = crypto.randomInt(1000, 9999).toString();
        const otpExpiry = new Date(Date.now() + 30 * 60 * 1000);

        user.otpCode = otpCode;
        user.otpExiry = otpExpiry;

        await user.save();
        res.status(200).json({ message: "OTP sent" });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post("/forget-password", async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.status(404).json({ message: "User not found" });

        const token = crypto.randomBytes(32).toString("hex");

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000;
        await user.save();

        res.status(200).json({ message: "Email sent" });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post(
    "/reset-password/:token",
    passwordValidationRules(),
    validation,
    async (req, res) => {
        try {
            const { token } = req.params;
            const { password } = req.body;

            const user = await User.findOne({ resetPasswordToken: token });

            if (!user)
                return res
                    .status(400)
                    .json({ message: "Invalid or expired token" });

            user.password = password;
            user.resetPasswordToken = null;
            user.resetPasswordExpires = null;
            await user.save();

            res.status(200).json({ message: "Password reset successfully" });
        } catch (error) {
            res.status(500).json(error);
        }
    }
);

router.post(
    "/update",
    authenticationToken,
    userUpdateValidationRules(),
    validation,
    async (req, res) => {
        try {
            const { name, username, avatar } = req.body;
            const user = await User.findById(req.userId);

            user.name = name;
            user.username = username;
            user.avatar = avatar;
            await user.save();

            res.status(200).json({ message: "Account updated successfully" });
        } catch (error) {
            res.status(500).json(error);
        }
    }
);

router.delete("/delete-account", authenticationToken, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.userId);

        res.status(200).json({ message: "Account deleted successfully" });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id).populate("posts");

        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/", async (req, res) => {
    try {
        const searchKey = req.query.search;
        const limit = parseInt(req.query.limit) || 5;
        const page = parseInt(req.query.page) || 1;
        const skip = (page - 1) * limit;

        const users = await User.aggregate([
            {
                $lookup: {
                    from: "User",
                    localField: "following",
                    foreignField: "_id",
                    as: "following",
                },
            },
            {
                $lookup: {
                    from: "User",
                    localField: "followers",
                    foreignField: "_id",
                    as: "followers",
                },
            },
            {
                $lookup: {
                    from: "Post",
                    localField: "posts",
                    foreignField: "_id",
                    as: "posts",
                },
            },
            {
                $match: {
                    $or: [
                        { name: { $regex: new RegExp(searchKey, "i") } },
                        { username: { $regex: new RegExp(searchKey, "i") } },
                    ],
                },
            },
            {
                $project: {
                    password: 0,
                    otpCode: 0,
                    otpExiry: 0,
                    resetPasswordExpires: 0,
                    resetPasswordToken: 0,
                },
            },
        ])
            .skip(skip)
            .limit(limit);

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
