import actiontypes from "../actiontypes";

const initialState = {
    loggedIn:false,
    activeUser:{}
}

const userReducer =(state=initialState,action) => {
    
    switch (action.type) {

    case actiontypes().user.login: 
        state.loggedIn = true
        state.activeUser = action.payload.user
        return state

    case actiontypes().user.logout: 
        state = initialState

        return state

    

    default: 
        return state
    }
}



export  default  userReducer;


