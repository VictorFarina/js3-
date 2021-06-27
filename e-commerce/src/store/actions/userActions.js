
import actiontypes from '../actiontypes';
import axios from 'axios'; 

export const registerUser = _user => {
    return async dispatch => {
        const res = await axios.post('http://localhost:9999/api/users/register',_user)
        console.log(res);
        dispatch(loginUser(res.data))
    }
}

export const loginUser = _user => {
    return async dispatch => {
        const res =  await axios.post('http://localhost:9999/api/users/login', _user)
        dispatch(setActiveUser(res.data))

    }
//         console.log(user);
}

export const setActiveUser = _user => {
    return {        
        type:actiontypes().user.login,
        payload:_user
    }
}
export const logoutUser = _user => {


    return {        
        type:actiontypes().user.login,
        payload:_user
    }
    
}





        
    







