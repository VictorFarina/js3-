import React from 'react'
import ProductCard from './ProductCard'

const ProductGrid = ({productCatalog}) => {
    return (

        productCatalog.map(product=>(
            <ProductCard product={product}/>
            
        ))

        

        
    )
}

export default ProductGrid
