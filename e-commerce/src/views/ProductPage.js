import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductById} from '../store/actions/productCatalogActions'
// import ProductDetails from '../components/ProductDetails'



const ProductPage = () => {
    //dispatch actions in store
    const dispatch = useDispatch();  
    const id = useParams()._id 
    useEffect(() => {
    dispatch(getProductById(id)) 
    },[dispatch,id]);

    //recieving  state from  
    const product = useSelector( state => state.product.product )


    return (
        <div>
            <div className="product-page">

            <h1>

                <h3>hej</h3>
                {/* {product && <ProductDetails item={product}/>} */}
            </h1>

            </div>
        </div>
    )
}

export default ProductPage
