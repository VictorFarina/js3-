import React from 'react'
import ProductCard from './ProductCard'

const ProductGrid = ({productCatalog}) => {
    return (
        productCatalog.map(product=>(
            <ProductCard product={product} key={product._id}/>
        ))
    )
}

export default ProductGrid
