import {configureStore,createAction,createReducer} from "@reduxjs/toolkit"
const addToCart = createAction("ADD_TO_CART")
//reducer
const cartReducer = createReducer([],(builder) => {
    builder.addCase(addToCart,(state,action) => {
        state.push(action.payload)
    })
})

//store
const store = configureStore({
    reducer:{
        cart:cartReducer
    }
})

//subscribe
store.subscribe(() => {
    console.log("ONCHANGE",store.getState())
})

//dispatch
store.dispatch(addToCart({id:1,qty:20}))