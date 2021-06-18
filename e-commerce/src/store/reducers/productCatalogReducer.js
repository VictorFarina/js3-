import actiontypes from "../actiontypes";


const initialState = []

const productCatalogReducer=(state=initialState,action) => {
    switch (action.type) {
        case actiontypes().productCatalog.set:state=action.payload
            return state
            
        default: 
            return state
    }
}

export  default  productCatalogReducer;


