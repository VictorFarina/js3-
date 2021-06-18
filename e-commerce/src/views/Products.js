import React from 'react';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getProductCatalog } from '../store/actions/productCatalogActions';
import ProductGrid from '../components/ProductGrid';

const Products = () => {
    const dispatch = useDispatch(); 
    const productCatalog = useSelector(state =>state.productCatalog); 

    useEffect(() => {
    dispatch(getProductCatalog());
    },[dispatch])

    return (
        <div className="product-grid">
            <ProductGrid productCatalog={productCatalog}/>
        </div>       
    )
}


export default Products
