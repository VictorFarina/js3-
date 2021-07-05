import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UserNav from '../components/user/UserNav';
import Welcome from '../components/user/Welcome'




const User = ({activeUser,isAdmin}) => {


    return (

        <section className=" container d-flex mt-5">
           <UserNav activeUser={activeUser}/>
           
                <Welcome activeUser={activeUser}/> 
         
            
        </section>
        
    )
}

export default User
