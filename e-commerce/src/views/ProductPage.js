import React from 'react';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getProductById } from '../store/actions/productCatalogActions';
// import ProductDetails from '../components/ProductDetails'
import {useParams} from 'react-router-dom'
import { addItem } from '../store/actions/cartActions';

const ProductPage = () => {
    const dispatch = useDispatch();  
    const id = useParams().id 
    useEffect(() => {
    dispatch(getProductById(id)) 
    },[dispatch,id]);
    //recieving  state from  
    const product = useSelector( state => state.product )
    console.log(product);
    return ( 
            <div className="d-flex mt-5 w-75 p-3 mx-auto shadow-2">

                <div className="col-6">
                    <img src={product.img} alt="" />
                </div>

                <div className="col-6 align-items-center mt-5 gap-10">
                    <h4>{product.name}</h4>
                    <h4>{product.short}</h4>
                    <p>{product.price} kr</p>
                    <small>{product.desc}</small>
                    
                    <div className="mt-5">
                    <button onClick={()=>{dispatch(addItem(product))}}className="btn btn-dark btn-dark px-5 py-3">ADD TO CART</button>
                    </div>

                    


                   

                </div>
                
            </div>  
    )
}
export default ProductPage
