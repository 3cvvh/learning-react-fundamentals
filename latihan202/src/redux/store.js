import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
    reducer:{
        cart:cartReducer
    }
})
console.log("ONCREATE",store.getState())

store.subscribe(() => {
    console.log("ONCHANGE", store.getState())
})

export default store