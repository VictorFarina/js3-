import React from 'react'
import {NavLink} from 'react-router-dom'
import Cart from './Cart'
import {useSelector} from 'react-redux'

const Navbar = () => {


    const totalQty = useSelector(state => state.cartReducer.totalQty)
    

    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
            
            <nav className="nav-links d-flex">
                    <NavLink  className="nav-link text-dark"  to="/">Home</NavLink>
                    <NavLink  className="nav-link text-dark"  to="/Products">Products</NavLink>
                    <NavLink  className="nav-link text-dark"  to="/About">About</NavLink>
            </nav>



            

            <div className="d-flex">

                <div className="dropdown justify-content-end mx-5">
                    
                    
                        <i className="fas fa-user dropdown-toggle position-relative"
                            type="button"
                            id="dropdownMenuButton"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false">
                            
                        </i>
                                
                        <ul className="dropdown-menu dropdown-menu-end cart w-25" aria-labelledby="dropdownMenuButton">
                        <NavLink  className="nav-link text-dark"  to="/login">Login</NavLink>
                        </ul>
                
                </div>

               <div className="dropdown justify-content-end mx-5">
                <h2 className="text-center text-light bg-danger rounded-circle position-absolute end-50 bottom-0">{totalQty}</h2>
                    <i className="fas fa-shopping-cart dropdown-toggle position-relative"
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
         

            
              






   


               
          



        </div>
        
    )
}

export default Navbar
