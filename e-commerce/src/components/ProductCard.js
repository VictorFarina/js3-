import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addItem } from '../store/actions/cartActions';

const ProductCard = ({product}) => {

    const dispatch=useDispatch();

    return (
            <div className="card text-center col-md-2 col-sm-5  shadow-5 tada w-25">
                <div className="m-auto">
                    <img className="card-img-top hover-zoom" src={product.img} alt=""/>
                </div>
 

                <Link className="view-btn"
                to={`/products/${product._id}`} 

                
                > view </Link>
                <div className="card-body card-block row">
                    <p className="card-title col-12 mt-5">{product.name}</p>
                    <small>fr {product.price} kr</small>
                </div>


                <button className="btn btn-dark p-3 mb-3" 
                    onClick={()=>{dispatch(addItem(product))}}>Add to cart
                </button>

         
         
            </div>

       
           

       

        
    )
}

export default ProductCard
