import React from 'react'
import { addItem, subItem,removeItem} from '../store/actions/cartActions';
import { useDispatch } from 'react-redux';




const CartItem = ({product}) => {

    

    const dispatch = useDispatch();

    const add = e => {
        e.stopPropagation()
        dispatch(addItem(product))
    }
    const sub = e => {
        e.stopPropagation()
        dispatch(subItem(product))
    }
    const remove = e => {
        e.stopPropagation()
        dispatch(removeItem(product))
        
    }


    
    
    return (

        <li className="d-flex p-5 border border-primary flex-row"
                key={product._id}>

                    <img className=""src={product.img} height="40px"alt="" />

                <div className="col-7">
                        <strong>{product.name}</strong>
                        <p className="text-muted">{product.quantity}</p>
                </div>
                    
                <div className="col-4 d-flex flex-row h-50">
                        <button className="btn btn-small btn-light p-3" onClick={sub}>-</button>
                        <button className="btn btn-small btn-light p-3" onClick={add}>+</button>
                         
                        <button className="btn-sm btn-danger fas fa-trash border-0"onClick={remove}></button>
                </div>

                    

                <div className="justify-content-end">
                    { product.quantity * product.price }
                </div>

            </li>
        
            
       
    )
}

export default CartItem
