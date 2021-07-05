import actiontypes from "../actiontypes";

const initialState = {
allUsers:[]

}

const allUsersReducer=(state=initialState,action) => { 
    console.log(action);
    switch (action.type) {
        
        case actiontypes().allUsers.set:
            state.allUsers=action.payload
            return state
            
        default: 
            return state
            
    }

}

export  default  allUsersReducer;


