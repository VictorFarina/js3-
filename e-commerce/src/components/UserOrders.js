import React, { useEffect } from 'react'
import UserNav from './user/UserNav'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import {updateUser,getAllUsers} from '../store/actions/userActions'



const UserOrders = () => {

  
    const { id } = useParams();
    const dispatch =useDispatch();
    const allUsers = useSelector((state) => state.allUsersReducer.allUsers);
    let thisUser= allUsers.find(user=>user._id===id)

    
    useEffect(() => {
        dispatch(getAllUsers());
    },[dispatch])
    
   

  
   

    const changeOrderStatus = (e, _orderNo)=> {
        e.preventDefault();
        let thisOrder = thisUser.orders.find(order=>order.orderNo===_orderNo)

        if(thisOrder.shipped===true) {
            thisOrder.shipped=false
        } else {
            thisOrder.shipped=true 
        }

        let orderIndex = thisUser.orders.indexOf(thisOrder)        
        

        

        thisUser.orders[orderIndex]=thisOrder

        console.log(thisUser);


    

        

     

        dispatch(updateUser(thisOrder,thisUser))

    }
        



    return (
    
    <section className="container d-flex mt-5">
        <UserNav/>
    <div className="ms-5 mt-5">
        <h1>Orders:</h1>

        <ul className="m-4 p-5 d-flex w-75 row-flex flex-flow-wrap">
            {thisUser.orders.map( order => (
                <form key={order.orderNo}
                onSubmit={(e)=>changeOrderStatus(e,order.orderNo)}
                className="card mt-4">
                    <p> Beställningsnummer: {order.orderNo}</p>
                    <p> Beställningsdatum: {order.date}</p>
                    <p> Totalsumma: {order.totalPrice}sek</p>
                    <p className={order.shipped ? 
                        "text-success border" : 
                        "text-danger border"} 
                        > Status: {order.shipped ? 
                        'Skickad' : 'Ej skickad'}
                    </p>

                { 
                    order.shipped ===true ? 
                    <button 
                    type="submit"
                    className="btn-danger"> 
                    stoppa
                    </button> 
                    : 
                    <button 
                    type="submit" 
                    className="btn-primary"> 
                        färdigställorder
                    </button>

                }

                    
                   
                </form>

                ))}
                
            

             
        </ul>
    </div>
    </section>
            
    
    )

}

export default UserOrders
