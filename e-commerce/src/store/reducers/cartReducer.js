import actiontypes from "../actiontypes";

const initialState = {
    cart:[],
    totalPrice:0,
    totalQty:0

    

    
}



const cartReducer=(state=initialState,action) => {
    let itemIndex
    
    switch (action.type) {

        case actiontypes().cart.add:
            itemIndex = state.cart.findIndex(product=>product._id===action.payload._id)
            itemIndex < 0 ? state.cart = [...state.cart,{...action.payload,quantity:1}] : state.cart.[itemIndex].quantity+=1
            state.totalPrice = getTotalPrice(state.cart)
            state.totalQty = getTotalQty(state.cart)

            return state
        case actiontypes().cart.sub:

            action.payload.quantity === 1

            ? state.cart.filter(product=> product._id !==action.payload_id)

            : action.payload.quantity -=1

            state.totalPrice = getTotalPrice(state.cart)
            state.totalQty = getTotalQty(state.cart)


            return state

        case actiontypes().cart.remove:

            itemIndex = state.cart.findIndex(product=>product._id===action.payload._id)

            state.cart.splice(itemIndex,1);

            state.totalPrice = getTotalPrice(state.cart)
            state.totalQty = getTotalQty(state.cart)

            return state

        default: 
        
            return state

            
    }


   

    
}

const getTotalPrice = cart => {
    let total = 0
    cart.forEach(product=>{
        total+=product.price * product.quantity
    })

    return total

}
const getTotalQty = cart => {
    let total = 0
    cart.forEach(product=>{
        total+= product.quantity
    })

    return total

}




export  default  cartReducer;


