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
            <h1>All users: </h1>
            <ul className="m-4 p-5">
            {allUsers.map( user => (
            <li 
            key={user._id} 
            className="shadow-5 list-unstyled d-flex mb-3 px-5">
                <p> Namn: {user.firstName} {user.lastName}</p>
                <p> E-mail: {user.email}</p>
                
                <Link 
                to={`/allUsers/${user._id}/orders`}
                >    
                <p> Beställningar</p>
                </Link>
            </li>
))}
        
       </ul>
            
            
        </div>
</section>
            
    
    )

   





  

}

export default AllUsers
