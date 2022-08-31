import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import productReducer from "./product";

const rootReducer = {
    auth: authReducer,
    product: productReducer
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
