import React from 'react'
import ProductCard from './ProductCard'

const ProductGrid = ({products}) => {
    return (
        <div className="product-grid">

            {products.map(product=>
             <ProductCard product={product}/>
                )}
        
           
            

        
        </div>
    )
}

export default ProductGrid
