import React from 'react'
import {NavLink} from 'react-router-dom'
import Cart from './Cart'

const Navbar = () => {
    return (
        <div className="navbar">
            <nav className="nav-links">

                    <NavLink exact activeclassname="active-link" className="nav-link"  to="/">Home</NavLink>
                    <NavLink exact activeclassname="active-link" className="nav-link"  to="/Products">Products</NavLink>
                    <NavLink exact activeclassname="active-link" className="nav-link"  to="/About">About</NavLink>
                    <NavLink exact activelassname="active-link" className="nav-link"  to="/cart">Cart</NavLink>

            </nav>

            
              

            



               <div className="dropdown">
               <i className="fas fa-shopping-cart dropdown-toggle"
                 type="button"
                 id="dropdownMenuButton"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"></i>
                    
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">

                    <Cart/>
                   
                </ul>
               

               </div>



   


               
          



        </div>
        
    )
}

export default Navbar
