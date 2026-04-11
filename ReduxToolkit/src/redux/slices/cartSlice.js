import { createSlice } from "@reduxjs/toolkit"
// import store from "../store"
const cartSlice = createSlice({
    name:"cart",
    initialState:{
        data:JSON.parse(localStorage.getItem("cart")) || []
    },
    reducers:{
        addToCart: (state,action) => {
            const checkItem = state.data.find(v => v.id == action.payload.id) || false
            if(checkItem){
                checkItem.qty++
            }else{
                state.data.push(action.payload)
            }
        }
    }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer