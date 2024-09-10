import { configureStore } from "@reduxjs/toolkit";

import ModalSlice from "./slices/ModalSlice";

const store = configureStore({
    reducer: {
        ModalSlice,
    },
});

export default store;
export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
