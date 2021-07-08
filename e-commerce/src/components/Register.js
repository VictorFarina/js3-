


import React from 'react'
import { useDispatch } from 'react-redux';
import { registerUser} from '../store/actions/userActions'
import { useHistory } from 'react-router-dom';


const Register = () => {
    
    const history = useHistory();
    const dispatch = useDispatch();
    const onSub=(e)=>{
        e.preventDefault();
        let user = {
            firstName:document.getElementById('firstName').value,
            lastName:document.getElementById('lastName').value,
            email:document.getElementById('email').value,
            password:document.getElementById('password').value
        }
        dispatch(registerUser(user,history))
    }
    return (

    <form onSubmit={onSub} className="log-in w-50 height-50 mx-auto text-center form-group shadow-4 my-5 py-5">

        <h2 className="mb-5">Dina uppgifter:</h2>

        <div className="mx-auto">
            <input className="py-2 mx-2 border-muted" type="text" placeholder="Förnamn" id='firstName'/>
            <input className="py-2 mx-2" type="text" placeholder="Efternamn"id='lastName' />
            <br/>
            <br/>
        </div>

        <div className="mx-auto">
            <input className="w-25 py-2 my-3" type="text" placeholder="e-postaddress"id='email' />
            <br/>

            <input className="w-25 py-2 my-3" type="password" placeholder="önskat lösenord"id='password'/>
            <br/>
            <br/>
            <button className="w-25 py-3 my-3 btn btn-dark py-3" type="submit" placeholder="bekräfta lösenord">BLI MEDLEM</button>
            <br />
        </div>

    </form>

)
            
        
}

export default Register
