import actiontypes from '../actiontypes';
import axios from 'axios';


export const registerUser = (_user ,history )=> {
    return async dispatch => {
        await axios.post('http://localhost:9999/api/users/register', _user)
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
        if(history){
        history.push('/user')
        }

        
    }
}

export const getAllUsers = (_orderRes) => {

    
   
    return async dispatch => {
        const res = await axios.get('http://localhost:9999/api/users')
        dispatch(setAllUsers(res.data))
        if(_orderRes){

            console.log(_orderRes);
            
           
        }


       
    }
}


export const updateOrderStatus = (_order, _user, userToken) => {
    return async dispatch => {
        const res = await axios.patch(`http://localhost:9999/api/users/order/${_order.orderNo}`,_user)
        res.status===(200) ? 
            dispatch(getAllUsers(res)) : console.log('error') ;

           // if admin is the user wich order is updated
        userToken ? 
            dispatch(updateActiveUser(_user,userToken)): console.log('admin order updated') ;
    }
}

export const addUserOrder = (_order, _user) => {
 
    return async dispatch => {
        await axios.patch(`http://localhost:9999/api/users/${_user.email}`,
            _order,
            {headers: { Authorization: "Bearer " + _user.token }}
        )
        dispatch(updateActiveUser(_user,_user.token))
        

        
       
    }
}

export const updateActiveUser = (_user,_userToken) => {
    return async dispatch => {
        const res = await axios.get(
            `http://localhost:9999/api/users/${_user.email}`,
            { headers: { Authorization: "Bearer " + _userToken }}
        )
        dispatch(setActiveUser({
            ...res.data.user,
            token: res.data.token
        }))
    }
}

export const setActiveUser = (_user) => {
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