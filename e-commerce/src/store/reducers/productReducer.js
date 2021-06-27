import actiontypes from "../actiontypes";


const initialState = {
    product:null,
}

const productReducer=(state=initialState,action) => {

    switch (action.type) {
        
        case actiontypes().product.set:state = action.payload
            return state


        default: 
            return state


    }


}

export  default  productReducer;


