import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice'
import {apiSlice} from './slices/apiSlice'
import adminAuthReducer from './slices/Admin/authSlice'

 const store = configureStore({
    reducer : {
        auth : authReducer,
        adminauth:adminAuthReducer,
        [apiSlice.reducerPath] : apiSlice.reducer ,
    },
    middleware : (GetDefaultMiddleware) => GetDefaultMiddleware()
    .concat(
        apiSlice.middleware),
    devTools:true
})

export default store;