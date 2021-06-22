import React from 'react';
import {useSelector} from 'react-redux';
import CartItem from './CartItem';



// import ProductDetails from '../components/ProductDetails'



const Cart = () => {

    const shoppingCart = useSelector(state => state.cartReducer.cart)
    const totalPrice =useSelector(state=>state.cartReducer.totalPrice)
    

    return (

        <div className="bg-light ">
            {shoppingCart.map(product => (
                <CartItem product={product} key={product._id}/>
            ))}  
            <div className="p-4 gap-2 align-content-end">
                <h4 className="text-muted">Total:<span className="text-danger">{totalPrice}kr</span></h4>
            </div>
        </div>
    )
}

export default Cart
