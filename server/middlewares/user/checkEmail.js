const User = require("../../models/User");

const checkEmail = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (user)
            return res
                .status(400)
                .json({ message: "Email is already registrated" });
        return next();
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = checkEmail;
