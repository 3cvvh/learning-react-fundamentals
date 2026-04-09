import { legacy_createStore } from "redux";

//reducer
const cartReducer = (state = {
    cart:[]
},action) => {
    switch(action.type){
        case "ADD_TO_CART": 
        return {
            ...state,cart:[action.payload,state.cart]
        }
        default:
            return state
    }
}
//store
const store = legacy_createStore(cartReducer)
console.log("onCreate",store.getState())
//subscribe
store.subscribe(() => {
    console.log("onChange",store.getState())
})
//dispatch
const action1 = {type:"ADD_TO_CART" ,payload:{id:1,qty:10}}
store.dispatch(action1)