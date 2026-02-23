import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer";
import loadingReducer from "./loading/loadingReducer"
import cartReducer from "./carts/CartReducer"


export const store = configureStore({
    reducer: {
        auth: authReducer,

        loading: loadingReducer,

        carts: cartReducer

    },
devTools: true

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch