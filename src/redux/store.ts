import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer";
import loadingReducer from "./loading/loadingReducer"


export const store = configureStore({
    reducer: {
        auth: authReducer,
        loading: loadingReducer
    },
devTools: true

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch