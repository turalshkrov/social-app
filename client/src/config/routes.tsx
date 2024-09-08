import { createBrowserRouter } from "react-router-dom";

import {
    EmailVerification,
    ForgotPassword,
    Login,
    ResetPassword,
    Signup,
} from "@/pages";

const router = createBrowserRouter([
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "signup",
        element: <Signup />,
    },
    {
        path: "forgot-password",
        element: <ForgotPassword />,
    },
    {
        path: "reset-password",
        element: <ResetPassword />,
    },
    {
        path: "verify-email",
        element: <EmailVerification />,
    },
]);

export default router;
