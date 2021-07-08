import React from 'react'
import {NavLink} from 'react-router-dom'
import Cart from './Cart'
import {ReactComponent as CartIcon} from './icones/CartIcon.svg'

import {useSelector,useDispatch} from 'react-redux'
import { logoutUser } from '../store/actions/userActions';
import { clearCart } from '../store/actions/cartActions';


const Navbar = () => {
    const totalQty = useSelector(state => state.cartReducer.totalQty)
    const loggedIn = useSelector(state => state.userReducer.loggedIn)
    // const isAdmin = useSelector(state => state.userReducer.isAdmin)
    const dispatch = useDispatch();
    const logout = e => {
        e.stopPropagation();
        dispatch(clearCart())
        dispatch(logoutUser())
    }
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">       
            <nav className="nav-links d-flex">
                    <NavLink  className="nav-link text-dark"  to="/">Home</NavLink>
                    <NavLink  className="nav-link text-dark"  to="/Products">Products</NavLink>
                    <NavLink  className="nav-link text-dark"  to="/About">About</NavLink>
            </nav>

            <div className="d-flex flex-row mt-3 ">
                <div className="dropdown justify-content-end">
                        <i className="fas fa-user dropdown-toggle position-relative  bg-dark p-3 rounded-circle text-light"
                            type="button"
                            id="dropdownMenuButton"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false">
                        </i>       
                        <ul className="dropdown-menu dropdown-menu-end cart w-25" aria-labelledby="dropdownMenuButton">
                        {!loggedIn ?  <NavLink  className="nav-link text-dark"  to="/login">Login</NavLink> : (
                            <>
                            <NavLink className="nav-link text-dark" to="/user">User</NavLink>
                            <NavLink onClick={logout} className="nav-link text-dark" to="/products">Logout</NavLink>
                            </>
                            )
                        }
                        </ul>
                </div>

               <div className="dropdown mx-2 container d-flex">
                
                   <h3 className="text-light bottom-0 m-auto rounded-circle px-3 bg-dark pt-3 mx-4">{totalQty}</h3>
                   <CartIcon className="dropdown-toggle position-relative"
                        type="button"
                        id="dropdownMenuButton"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false">  
                        </CartIcon> 
                        <ul className="dropdown-menu dropdown-menu-end cart" aria-labelledby="dropdownMenuButton">
                        <Cart/>
                         </ul>
                  
               </div>
            </div>
        </div>
    )
}

export default Navbar
