import { Toaster } from "sonner";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.scss";
import {
    EmailVerification,
    ForgotPassword,
    Login,
    ResetPassword,
    Signup,
} from "@/pages";

function App() {
    return (
        <BrowserRouter>
            <Toaster position="top-right" />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="email-verify" element={<EmailVerification />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
