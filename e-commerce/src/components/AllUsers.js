import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../store/actions/userActions';
import UserNav from './user/UserNav'
import {Link} from 'react-router-dom'


const AllUsers = () => {

    const dispatch = useDispatch(); 
    const allUsers = useSelector(state =>state.allUsersReducer.allUsers)


    useEffect(() => {
        dispatch(getAllUsers());
    },[dispatch])


    return (
<section className=" container d-flex mt-5">
        <UserNav/>
        <div className="ms-5 mt-5">
            <h3>Alla använare:</h3>
            <small>Här kan du som admin hantera kundordrar</small>
            <ul className="my-4 p-5">
                <h3 className="mb-5">Medlemmar:<i className="fas fa-arrow-down"></i> </h3>
            {allUsers.map( user => (
            <div 
            key={user._id} 
            className="shadow-5 mb-3 px-5 justify-content-between">
                <div>
                    <p> {user.firstName} {user.lastName}</p>
                    <small> E-mail: {user.email}</small>
                </div>

                <Link 
                className="btn btn-dark btn-block text-center mb-5"
                to={`/allUsers/${user._id}/orders`}
                >    
                <p>Se ordrar</p>
                </Link>

            </div>
))}
        
       </ul>
            
            
        </div>
</section>
            
    
    )

   





  

}

export default AllUsers
