import { toast } from "sonner";

import http from "../api";
import { iCheckUsernameRequest, iCreateUserRequset } from "./iUser";

export const checkUsername = async (data: iCheckUsernameRequest) => {
    return http.post("/users/check-username", data);
};

export const createUser = async (data: iCreateUserRequset) => {
    const promise = http.post("users/register", data);

    toast.promise(promise, {
        loading: "loading...",
        success: "User created succesfully",
        error: "Somethings got wrong",
    });

    return await promise;
};

export const getUsers = async (searchKey: string) => {
    return http.get("users?search=" + searchKey);
};
