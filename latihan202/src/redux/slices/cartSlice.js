import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{data:JSON.parse(localStorage.getItem("cart")) || []},
    reducers:{
        addToCart:(state,action) => {
            const checkItem = state.data.find(i => i.id == action.payload.id )
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