import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { loginUser} from '../store/actions/userActions'
import { useHistory } from 'react-router-dom';

const Login = () => {
    
    const history = useHistory();
    const dispatch = useDispatch();
    const onSub=(e)=>{
        e.preventDefault();
        const user = {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }
        // console.log(user);
        dispatch(loginUser(user,history))
       
    }
    return (

       
            <form onSubmit={onSub} className="log-in w-50 height-50 mx-auto text-center form-group shadow-4 my-5 py-5">

                <h1 className="mb-5 text-dark">Logga in:</h1>

                <div className="mx-auto shadow-3 ">

                    <input className="w-25 py-2 my-3" type="text" placeholder="e-postaddress" id="email"/>
                    <br/>
                    
                    <input className="w-25 py-2 my-3" type="text" placeholder="lösenord" id="password"/>
                    <br/>

                    <button className="w-25 py-3 my-3 btn btn-dark py-3" type="submit" placeholder="lösenord">LOGGA IN</button>

                    <br />

                    <NavLink className="nav-link text-primary"  to="/register">Inte redan medlem?</NavLink>

                     
                </div>

               
            </form>
      
    
    
     
    )

}





export default Login
