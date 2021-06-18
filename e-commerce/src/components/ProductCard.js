import React from 'react'
import {Link} from 'react-router-dom'

const ProductCard = ({product}) => {
    return (
        
        <div className="product-card">
            <img src={product.img} alt="" />
            <h3>{product._id}</h3>

            <Link className="view-btn"

            to={`/products/${product._id}`}
            
            > view </Link>

            <h1>{product.name}</h1>
            <h3>fr {product.price} kr</h3>
            <button className="buy-btn">Buy</button>
        </div>
    )
}

export default ProductCard
