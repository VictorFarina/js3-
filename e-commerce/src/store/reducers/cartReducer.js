import actiontypes from "../actiontypes";

const initialState = {
    cart:[],
    totalCart:0
    
}



const cartReducer=(state=initialState,action) => {
    
    switch (action.type) {
        case actiontypes().cart.add:
            let itemIndex = state.cart.findIndex(product=>product._id===action.payload._id)
            itemIndex < 0 ? state.cart = [...state.cart,{...action.payload,quantity:1}] : state.cart.[itemIndex].quantity+=1

            state.totalCart= getTotalCart(state.cart)

            return state
        



        default: 
            return state

            
    }


   

    
}

const getTotalCart = cart => {
    let total = 0
    cart.forEach(product=>{
        total+=product.price * product.quantity
    })

    return total


}




export  default  cartReducer;


