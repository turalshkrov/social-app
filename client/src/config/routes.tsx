import { createBrowserRouter } from "react-router-dom";

import {
    EmailVerification,
    ForgotPassword,
    Login,
    ResetPassword,
    Signup,
} from "@/pages";
import { MainLayout } from "@/components";
import { Row } from "antd";

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
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                path: "/",
                element: <Row className="h-screen px-4 py-8">Home</Row>,
            },
            {
                path: "/home",
                element: <Row className="h-screen px-4 py-96">Home</Row>,
            },
            {
                path: "messages",
                element: "Messages",
            },
            {
                path: "search",
                element: "Search",
            },
            {
                path: "notifications",
                element: "Notifications",
            },
            {
                path: "profile",
                element: "Profile",
            },
        ],
    },
]);

export default router;
