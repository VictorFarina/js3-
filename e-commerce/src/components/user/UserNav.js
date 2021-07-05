import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

const UserNav = () => {

    const isAdmin = useSelector(state=>state.userReducer.isAdmin)

    return (
      
             <div className="w-25 border pb-5">
                    <ul className="list-unstyled mx-5">

                    <Link to='/user/orders'> 
                        <li className="my-5 shadow-4 p-3">Tidigare beställningar</li>
                    </Link>

                    <Link to='/user/contact'> 
                        <li className="my-5 shadow-4 p-3">Mina kontakt uppgifter</li>
                    </Link>

                    <Link to='/user/payments'> 
                        <li className="my-5 shadow-4 p-3">Mina betalningsuppgifter</li>
                    </Link>

                    {isAdmin && <Link to='/user/allUsers'> 
                        <li className="my-5 shadow-4 p-3">Alla användare</li>
                    </Link>
                    }

                    

                    </ul>
            </div>
     
    )
}

export default UserNav
