import React , { useEffect, useState } from 'react'
import UserNav from './user/UserNav'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import {updateOrderStatus, getAllUsers} from '../store/actions/userActions'

const UserOrders = (props) => {

// const [click,setClick]=useState()





 
const { id } = useParams();
const dispatch =useDispatch();
const allUsers = useSelector((state) => state.allUsersReducer.allUsers);
//wich user to update
let thisUser=allUsers.find(user=>user._id===id)
//if admin is the actual user
const userToken=props.activeUser.token;
















useEffect(() => {

    // (props.activeUser)
}, [allUsers])






const changeOrderStatus = (e,_orderNo)=> {
        e.preventDefault()
        let thisOrder=thisUser.orders.find(order=>order.orderNo===_orderNo)
        thisOrder.shipped ? thisOrder.shipped=false : thisOrder.shipped=true
        dispatch(updateOrderStatus(thisOrder,thisUser,userToken))  
        // setOrderStatus(!orderStatus)
        // console.log(className);  
    
        getAllUsers()

}





return (

<section  className="container d-flex mt-5">

        <UserNav/>
    <div className="ms-5 mt-5">
        <h1>Orders:</h1>
      
        <ul className="m-4 p-5 d-flex w-75 ">
            {thisUser.orders.map( order => (
                <div 
                    key={order.orderNo}
                    className={!order.shipped ? 'border border-warning' : 'border border-success' }>
                        <p> Beställningsnummer: {order.orderNo}</p>
                        <p> Beställningsdatum: {order.date}</p>
                        <p> Totalsumma: {order.totalPrice}sek</p>               
                        <p  
                        className={!order.shipped ? 'bg-warning' : 'bg-success' } > Status: {order.shipped ? 'Order skickad' : 'Order ej skickad'} </p>

                    <button
                        type="button"
                        
                        className="btn-block"
                        // onClick={(e)=>{changeOrderStatus(e,order)}}
                        onClick={(e)=>changeOrderStatus(e,order.orderNo)}
                      
                        >{!order.shipped ? 'skicka' : 'stoppa'}
                    </button> 


                   

                </div>
                ))}            
        </ul>

     
    </div>
</section>
            
    
)

}

export default UserOrders
