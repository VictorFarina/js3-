import React from 'react'
import {NavLink} from 'react-router-dom'

const Login = () => {
    return (

       
            <form className="log-in w-50 height-50 mx-auto text-center form-group shadow-4 my-5 py-5">

                <h1 className="mb-5 text-dark">Logga in:</h1>

                <div className="mx-auto shadow-3 ">
                    <input className="w-25 py-2 my-3" type="text" placeholder="e-postaddress"/>
                    <br/>
                    <input className="w-25 py-2 my-3" type="text" placeholder="lösenord"/>
                    <br/>
                    <button className="w-25 py-3 my-3 btn btn-dark py-3" type="submit" placeholder="lösenord">LOGGA IN</button>
                    <br />
                    <NavLink className="nav-link text-primary"  to="/register">Inte redan medlem?</NavLink>

                </div>

               
            </form>
      
    
    
     
    )
}

export default Login
