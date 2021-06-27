import React from 'react';
import {useSelector} from 'react-redux';
import CartItem from './CartItem';
import {NavLink} from 'react-router-dom'



// import ProductDetails from '../components/ProductDetails'



const Cart = () => {

    const shoppingCart = useSelector(state => state.cartReducer.cart)
    const totalPrice =useSelector(state=>state.cartReducer.totalPrice)
    

    return (

        <div className="bg-light ">
            {shoppingCart.map(product => (
                <CartItem product={product} key={product._id}/>
            ))}  

            <div className="p-4 gap-2 align-content-end d-flex flex-row border">
                <h4 className="text-muted col-9 mt-auto">Total:<span className="text-danger">{totalPrice}kr</span></h4>
                <NavLink  className="btn col-3 btn-dark p-3 mb-auto"  to="/checkout">Till kassan</NavLink>

         
               

            
            </div>
        </div>
    )
}

export default Cart
