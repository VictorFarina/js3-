import React from 'react';
import {useSelector} from 'react-redux';

// import ProductDetails from '../components/ProductDetails'



const Cart = () => {

    const shoppingCart = useSelector(state => state.cartReducer.cart)

    return (
        <div className="bg-light ">
            {shoppingCart.map(product => (
                <li className="d-flex p-5 border border-primary">
                    <img  className=""src={product.img} height="40px"alt="" />
                    <p className="w-100" >{product.name}</p>
                </li>

              
            ))}  
        </div>
    )
}

export default Cart
