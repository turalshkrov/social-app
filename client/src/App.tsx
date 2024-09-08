import { Suspense } from "react";
import { Toaster } from "sonner";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import "./App.scss";
import router from "./config/routes";
import { Preloader } from "./components";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Toaster position="top-right" />
            <Suspense fallback={<Preloader />}>
                <RouterProvider router={router} />
            </Suspense>
        </QueryClientProvider>
    );
}

export default App;
