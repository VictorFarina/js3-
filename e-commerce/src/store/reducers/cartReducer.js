import actiontypes from "../actiontypes";

const initialState = {
    cart:[],
}



const cartReducer=(state=initialState,action) => {
    switch (action.type) {
        case actiontypes().cart.add:
            let itemIndex = state.cart.findIndex(product=>product._id===action.payload._id)
            itemIndex <0 ? state.cart=[...state.cart,{...action.payload,quantity:1}]
            :state.cart.[itemIndex].quantity+=1

            return state
        
        default: 
            return state
    }


    
}



export  default  cartReducer;


