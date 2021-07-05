import actiontypes from "../actiontypes";

const initialState = {
    loggedIn:false,
    activeUser:{},
    isAdmin:false
}

const userReducer = (state=initialState,action) => {
    
    switch (action.type) {

    case actiontypes().user.login: 
        state.loggedIn = true
        state.activeUser = action.payload
        state.isAdmin = action.payload.isAdmin
        return state

    case actiontypes().user.logout: 
        state.loggedIn=false
        state.activeUser={}
        return state

  
    

    default: 
        return state
    }
}



export  default  userReducer;


