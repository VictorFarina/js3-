import React from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/actions/cartActions';



// import ProductDetails from '../components/ProductDetails'



const Cart = () => {


    const shoppingCart = useSelector(state => state.cartReducer.cart)
    const totalCart =useSelector(state=>state.cartReducer.totalCart)
    const dispatch = useDispatch();

   

   
      

    

  

    return (

        <div className="bg-light ">
            {shoppingCart.map(product => (
                <li className="d-flex p-5 border border-primary">
                    <img className=""src={product.img} height="40px"alt="" />
                    <div>
                        <strong>{product.name}</strong>
                        <p className="text-muted">{product.quantity}</p>
                    </div>
                    
                    <div className="d-flex flex-row align-content-baseline">
                        <button className="btn btn-small btn-light p-3">-</button>
                        <button className="btn btn-small btn-light p-3"
                         onClick={()=>{dispatch(addItem(product))}}
                        >+</button>
                        <button className="btn-sm btn-danger fas fa-trash border-0"></button>
                    </div>

                    <div className="col-3">
                        <strong>{ product.quantity}</strong>
                    </div>

                    <div>
                        {totalCart}
                    </div>

                </li>
            ))}  
        </div>
    )
}

export default Cart
