import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import productReducer from "./product";
import modalReducer from "./modal";

const rootReducer = {
    auth: authReducer,
    product: productReducer,
    modal: modalReducer
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
