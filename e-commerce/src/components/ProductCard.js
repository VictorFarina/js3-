import React from 'react'
const ProductCard = ({product}) => {
    return (
        <div className="product-card">
            <img src={product.img} alt="" />
            <h1>{product.name}</h1>
            <h3>fr {product.price} kr</h3>
            <button>Buy</button>
        </div>
    )
}

export default ProductCard
