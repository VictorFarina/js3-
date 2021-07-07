import React from 'react'
import { addUserOrder } from '../store/actions/userActions'
import {useSelector,useDispatch} from 'react-redux'
import { addItem, subItem,removeItem} from '../store/actions/cartActions';

import { useHistory } from 'react-router'

const Checkout = () => {

    const dispatch = useDispatch();
    const activeUser = useSelector(state => state.userReducer.activeUser)
    const cart = useSelector(state => state.cartReducer.cart)
    const totalPrice = useSelector(state => state.cartReducer.totalPrice)
    const history = useHistory()
   
    const add = ( e, product ) => {
        e.preventDefault();
        dispatch(addItem(product))
    }

    const sub = ( e, product)  => {
        e.preventDefault();
        dispatch(subItem(product))
    }

    const remove = ( e, product ) => {
        e.preventDefault();
        dispatch(removeItem(product))
    }

    const onSub =( e )=>{
        console.log(activeUser);
        e.preventDefault();
        const order ={
            orderNo:    String(Math.random()).slice(-10),
            date:       String(new Date()),
            products:   cart,
            totalPrice: totalPrice,
            shipped:    false
        }
        dispatch(addUserOrder(order,activeUser))
        history.push('/user')
    }
 
    return (   


      


        <form onSubmit={onSub}> 
     
        <ul className="list-group mb-3 sticky-top mt-5 w-50 m-auto ">

  
        
        {totalPrice===0 ?  <h1>kundvagnen är tom!</h1> :  
         
        (<>

      
         

                <div className="d-flex">
     
                    
                </div>
          
                {cart.map( product => (
                 
                <li className="list-group-item d-flex justify-content-between lh-condensed"
                key={product._id}>
                    <div className="w-50">
                        <h6 className="my-0">{product.name}</h6>
                        <small className="text-muted">Brief description</small>
                    </div>
                        <span className="text-muted">{product.quantity*product.price}</span>
                        <div className="col-4 d-flex flex-row h-50">
                        <button className="btn btn-small btn-light p-3" onClick={(e)=>sub(e,product)}>-</button>
                        <button className="btn btn-small btn-light p-3" onClick={(e)=>add(e,product)}>+</button>
                        <button className="btn-sm btn-danger fas fa-trash border-0"onClick={(e)=>remove(e,product)}></button>
                </div>
               
                </li>
            
                ))}

                <li className="list-group-item d-flex justify-content-between">
                    <span> TOTAL(SEK)</span>
                    <strong>{totalPrice}</strong>
                </li>           
                 <button className="btn btn-dark btn-block" type="submit">Slutför köp</button>        
              
                </>
                )
            }


             

            </ul>
       

            
        </form>


    

              

   
 
        )

    }
    



export default Checkout
