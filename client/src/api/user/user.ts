import http from "../api";

import { iCheckUsernameRequest } from "./iUser";

export const checkUsername = async (data: iCheckUsernameRequest) => {
    return http.post("/users/check-username", data);
};
