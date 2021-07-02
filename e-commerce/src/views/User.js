import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';




const User = ({activeUser,loggedIn}) => {
    console.log(activeUser);
    
    
  

    return (

        <section className=" container d-flex mt-5">
            <div className="w-25 card border">
                <ul className="list-unstyled mx-5">

                    <li className="my-5 shadow-4 p-3">Tidigare beställningar</li>
                  
                    <li className="my-5 shadow-4 p-3">Mina kontakt uppgifter</li>

                    <li className="my-5 shadow-4 p-3">Mina betalningsuppgifter</li>

                </ul>
            </div>
            <div className="ms-5 mt-5">

                <h1>Hej {activeUser.firstName} !</h1>
                <small>Här kan du se dina beställningar och användaruppgifter!</small>



            </div>
        </section>
        
    )
}

export default User
