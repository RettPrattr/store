import { configureStore } from "@reduxjs/toolkit";
// import { inventoryReducer } from "../features/inventory/inventorySlice";
import { searchTermReducer } from "../features/searchTerm/searchTermSlice";
import { productsApi } from "./api";
import { combineReducers } from "redux";
import { cartReducer } from "../features/cart/CartSlice";

const rootReducer = combineReducers({
    searchTermReducer,
    cartReducer,
    [productsApi.reducerPath]: productsApi.reducer
})


export const setupStore = () => {
    return configureStore({
    reducer: rootReducer,
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware()
        .concat(productsApi.middleware)
    })
}



export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']