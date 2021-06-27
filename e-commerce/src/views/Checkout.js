import React from 'react'
import { addUserOrder } from '../store/actions/userActions'
import {useSelector,useDispatch} from 'react-redux'

const Checkout = () => {

    const dispatch = useDispatch();
    const activeUser = useSelector(state => state.userReducer.activeUser)
    const order = useSelector(state => state.cartReducer.cart)

    const onSub = (e)=>{
        e.preventDefault();
        dispatch(addUserOrder(order))
    }



    return (

        <div className="container">
            <h2>checkout</h2>
            <button onClick={onSub}>slutför köp</button>
        </div>
    )
}

export default Checkout
