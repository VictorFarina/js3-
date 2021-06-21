import React from 'react'
import {NavLink} from 'react-router-dom'
import Cart from './Cart'
import {useSelector} from 'react-redux'

const Navbar = () => {


    const shoppingCart = useSelector(state => state.cartReducer.cart)

    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
            
            <nav className="nav-links d-flex">
                    <NavLink  className="nav-link text-dark"  to="/">Home</NavLink>
                    <NavLink  className="nav-link text-dark"  to="/Products">Products</NavLink>
                    <NavLink  className="nav-link text-dark"  to="/About">About</NavLink>
            </nav>

            
              



               <div className="dropdown justify-content-end">
                <i className="fas fa-shopping-cart dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false">
                    
                    </i>
                        
                    <ul className="dropdown-menu dropdown-menu-end cart" aria-labelledby="dropdownMenuButton">

                    <Cart/>
                   
                </ul>
               
               </div>



   


               
          



        </div>
        
    )
}

export default Navbar
