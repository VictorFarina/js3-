import React from 'react'
import { addUserOrder } from '../store/actions/userActions'
import {useSelector,useDispatch} from 'react-redux'

const Checkout = () => {

    const dispatch = useDispatch();
    const activeUser = useSelector(state => state.userReducer.activeUser)
    const cart = useSelector(state => state.cartReducer.cart)
    const totalPrice = useSelector(state => state.cartReducer.totalPrice)



    const onSub = (e)=>{

        e.preventDefault();

        const order = {
            orderNo:    String(Math.random()).slice(-10),
            date:       Date(),
            products:   cart,
            totalPrice: totalPrice
        }

        dispatch(addUserOrder(order,activeUser))
        


    }



    return (

        <div className="container">
            <h2>checkout</h2>
            <button onClick={onSub}>slutför köp</button>
        </div>
    )
}

export default Checkout
