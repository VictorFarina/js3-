import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'


const UserNav = () => {

    const isAdmin = useSelector(state=>state.userReducer.isAdmin)

    return (
      
             <div className="w-50 border pb-5">
                  

                    <ul className="list-unstyled mx-5">

                    {isAdmin && <Link to='/user/allUsers'> 
                        <li className="my-5 shadow-4 p-3 link-dark bg-danger bg-lighten-sm">Admin</li>
                    </Link>
                    }

                    <Link to='/user/orders'> 
                        <li className="my-5 shadow-4 p-3 link-dark">Mina ordrar</li>
                    </Link>

                    <Link to='/user/contact'> 
                        <li className="my-5 shadow-4 p-3 link-dark">Mina kontakt uppgifter</li>
                    </Link>

                    <Link to='/user/payments'> 
                        <li className="my-5 shadow-4 p-3 link-dark">Mina betalningsuppgifter</li>
                    </Link>

                 
                    

                    </ul>
            </div>
     
    )
}

export default UserNav
