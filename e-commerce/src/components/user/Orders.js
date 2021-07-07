
import UserNav from './UserNav'
import { useSelector } from 'react-redux'

const Orders = () => {
    const activeUser = useSelector(state => state.userReducer.activeUser)
    
return (
<section className="container d-flex mt-5">
        <UserNav/>
    <div className="ms-5 mt-5">
    <h3>Mina ordrar:</h3>
            <small>Här kan du se status  på dina ordrar</small>
                {activeUser.orders.map( order => (
                <div className="d-flex shadow-5 table">
                    <ul className="m-4 p-5  ">
                        <li key={order.orderNo}
                            className="d-flex">
                                <div className="w-50">
                                    {/* <p> Ordernummer:{order.orderNo}</p> */}
                                    <p> Beställningsdatum:{order.date}</p>
                                    <p className={order.shipped ?"text-success border" : "text-danger border"} > Status: {order.shipped ? 'Skickad' : 'Ej skickad'}</p>
                                </div>
                        </li>
                    </ul>
                <ul className="list-group mb-3 sticky-top mt-5">
                    {order.products.map( product => (
                        
                    <li 
                        key={product.id}
                        className="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 className="my-0">{product.name} </h6>
                            <small className="text-muted">{product.quantity}st</small>
                        </div>
                        <span className="text-muted">{product.quantity*product.price}</span>
                    </li>
                       ))}
                      <li className="list-group-item d-flex justify-content-between">
                        <span> TOTAL(SEK)</span>
                        <strong>{order.totalPrice}</strong>
                    </li>
                </ul>
            </div>))}
    </div>

</section> 

            
    
)
}

export default Orders
