import React from 'react'
import { addUserOrder } from '../store/actions/userActions'
import {useSelector,useDispatch} from 'react-redux'

const Checkout = () => {
  

    const dispatch = useDispatch();
    const activeUser = useSelector(state => state.userReducer.activeUser)
    const cart = useSelector(state => state.cartReducer.cart)
    const totalPrice = useSelector(state => state.cartReducer.totalPrice)

    const onSub =(e)=>{
        e.preventDefault();
        const order ={
            orderNo:    String(Math.random()).slice(-10),
            date:       String(new Date()),
            products:   cart,
            totalPrice: totalPrice,
            shipped:    false
        }
        dispatch(addUserOrder(order,activeUser))
    }



    return (
        <form onSubmit={onSub}>
            <ul className="list-group mb-3 sticky-top mt-5 w-50 m-auto ">
                <div className="d-flex">
                    <span className="text-muted col-4">antal</span>
                    <span className="text-muted col-4">antal</span>
                    <span className="text-muted col-4">antal</span>
                </div>
          
                {cart.map( product => (
                 
                <li className="list-group-item d-flex justify-content-between lh-condensed"
                key={product._id}>
                    <div className="w-50">
                        <h6 className="my-0">{product.name}</h6>
                        <small className="text-muted">Brief description</small>
                    </div>
                        <span className="text-muted">{product.quantity*product.price}</span>
                </li>
            
                ))}

                <li className="list-group-item d-flex justify-content-between">
                        <span> TOTAL(SEK)</span>
                        <strong>{totalPrice}</strong>
                </li>

                <button type="submit">SKICKA ORDER</button>

            </ul>
    </form>



 
    )
}

export default Checkout
