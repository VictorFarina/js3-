import React from 'react';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getProductCatalog } from '../store/actions/productCatalogActions';
import ProductCard from '../components/ProductCard';

const Products = () => {
    const dispatch = useDispatch(); 
    const productCatalog = useSelector(state =>state.productCatalog); 

    useEffect(() => {
    dispatch(getProductCatalog());
    },[dispatch])

    return (
        <div className="container d-flex flex-wrap row  mx-auto mt-5">
            {productCatalog.map( product => (
                    <ProductCard product={product} key={product._id}/>
            ))}
        </div>
    )
}

export default Products
