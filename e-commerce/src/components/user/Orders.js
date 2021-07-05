import React from 'react'
import UserNav from './UserNav'


const Orders = ({activeUser}) => {

    


    return (

    <section className="container d-flex mt-5">
        <UserNav/>
    <div className="ms-5 mt-5">
        <h1>Orders:</h1>

        <ul className="m-4 p-5">
           
            {activeUser.orders.map( order => (
                <li key={order.orderNo}>
                    <p> Beställningsnummer: {order.orderNo}</p>
                    <p> Beställningsdatum: {order.date}</p>
                    <p> Totalsumma: {order.totalPrice}sek</p>
                    <p className={order.shipped ?"text-success border" : "text-danger border"} > Status: {order.shipped ? 'Skickad' : 'Ej skickad'}</p>
                   
                </li>
                ))}
                
            

        </ul>
    </div>
    </section>
            
    
    )
}

export default Orders
