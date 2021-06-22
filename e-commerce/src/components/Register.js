import React from 'react'

const Register = () => {
    return (
      
    <form className="log-in w-50 height-50 mx-auto text-center form-group shadow-4 my-5 py-5">

        <h2 className="mb-5">Dina uppgifter:</h2>

        <div className="mx-auto">
            <input className="py-2 mx-2 border-muted" type="text" placeholder="Förnamn"/>
            <input className="py-2 mx-2" type="text" placeholder="Efternamn"/>
            <br/>
            <br/>
        </div>

        <div className="mx-auto">
            <input className="w-25 py-2 my-3" type="text" placeholder="e-postaddress"/>
            <br/>
            <input className="w-25 py-2 my-3" type="text" placeholder="önskat lösenord"/>
            <br/>
            <input className="w-25 py-2 my-3" type="text" placeholder="bekräfta lösenord"/>
            <br/>
            <button className="w-25 py-3 my-3 btn btn-dark py-3" type="submit" placeholder="bekräfta lösenord">BLI MEDLEM</button>
            <br />
        </div>

    </form>

)
            
        
}

export default Register
