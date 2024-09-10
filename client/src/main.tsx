import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import "./index.css";
import store from "./store/store.ts";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
