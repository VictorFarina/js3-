import actiontypes from '../actiontypes';
import axios from 'axios';


export const registerUser = (_user ,history )=> {
    return async dispatch => {
        const res = await axios.post('http://localhost:9999/api/users/register', _user)
        dispatch(loginUser(_user,history))
    }
}
export const loginUser = (_user ,history )=> {
    return async dispatch => {
        const res = await axios.post('http://localhost:9999/api/users/login', _user)
        dispatch(setActiveUser({
            ...res.data.user,
            token: res.data.token
        }))
        history.push('/user')
        
    }
}

export const getAllUsers = () => {
    return async dispatch => {
        const res = await axios.get('http://localhost:9999/api/users')
        dispatch(setAllUsers(res.data))
        
    }
}

export const updateUser = (_order,_user) => {

    

 
  
    
    return async dispatch => {
        const res = await axios.patch(`http://localhost:9999/api/users/order/${_order.orderNo}`,_user)

        
        // .then(
        // dispatch(getAllUsers())
        // )

      
    }
}

export const addUserOrder = (_order, _user) => {
    console.log(_user);
    
    return async dispatch => {
        const res = await axios.patch(`http://localhost:9999/api/users/${_user.email}`,
            _order
            // {headers: { Authorization: "Bearer " + user.token }}
        )
        
        dispatch(updateActiveUser(_user))
        console.log(_user);
    }
}



export const updateActiveUser = _user => {
    return async dispatch => {
        const res = await axios.get(
            `http://localhost:9999/api/users/${_user.email}`,
            {
                headers: {
                    Authorization: "Bearer " + _user.token
                }
            }
        )
        dispatch(setActiveUser(res.data.user))
        console.log(res.data.user);
    }
}
export const setActiveUser = _user => {
    return {
        type: actiontypes().user.login,
        payload: _user
    }
}
export const logoutUser = () => ({
    type: actiontypes().user.logout,
})


export const setAllUsers = _allUsers => ({
    type: actiontypes().allUsers.set,
    payload: _allUsers
})