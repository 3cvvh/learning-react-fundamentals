import {createSlice,configureStore} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart(state,action){
            state.push(action.payload)
        }
    }
})

const store = configureStore({
    reducer:{
        cart:cartSlice.reducer
    }
})
console.log("ONSTART",store.getState())

store.subscribe(() => {
    console.log("ONCHANGE",store.getState())
})

store.dispatch(cartSlice.actions.addToCart({id:1,qty:20}))
