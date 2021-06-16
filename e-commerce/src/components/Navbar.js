import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <nav className="nav-links">

                    <NavLink exact activeclassName="active-link" className="nav-link"  to="/">Home</NavLink>
                    <NavLink exact activeclassName="active-link" className="nav-link"  to="/Products">Products</NavLink>
                    <NavLink exact activeclassName="active-link" className="nav-link"  to="/About">About</NavLink>

            </nav>

            <div className="cart">
               <i class="fas fa-shopping-cart"></i>
               <h3>3</h3>
                
            </div>



        </div>
        
    )
}

export default Navbar
