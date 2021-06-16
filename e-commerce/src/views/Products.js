import React from 'react'
import ProductGrid from '../components/ProductGrid'
import { useState } from 'react'


const Products = () => {





    
    

    const [products,setProducts]= useState([

      

        {id:1,name:'Eros',brand:'Versace',price:479,
        img:'https://pimg.azureedge.net/105825/feb8e6375233b8412d1ad74b85cef2e1/detailsc/eros-edt-50ml_1.jpg'},
      
        {id:2,name:'Boss The Scent',brand:'Hugo Boss',price:679,
        img:'https://pimg.azureedge.net/108754/63fd3a1c6856a43aaf06a8c5ec5c55ac/detailsc/boss-the-scent-edt-50ml_1.jpg'},
    
        {id:3,name:'1 Million',brand:'Paco Rabanne ',price:599,
        img:'https://pimg.azureedge.net/101896/ad1919c6fdd74659ee35920b4f1cf294/detailsc/1-million-edt-100ml_1.jpg'},
        
        {id:1,name:'Eros',brand:'Versace',price:479,
        img:'https://pimg.azureedge.net/105825/feb8e6375233b8412d1ad74b85cef2e1/detailsc/eros-edt-50ml_1.jpg'},
      
        {id:2,name:'Boss The Scent',brand:'Hugo Boss',price:679,
        img:'https://pimg.azureedge.net/108754/63fd3a1c6856a43aaf06a8c5ec5c55ac/detailsc/boss-the-scent-edt-50ml_1.jpg'},
    
        {id:3,name:'1 Million',brand:'Paco Rabanne ',price:599,
        img:'https://pimg.azureedge.net/101896/ad1919c6fdd74659ee35920b4f1cf294/detailsc/1-million-edt-100ml_1.jpg'},
     
      ])



    return (
        <div> 
            <ProductGrid products={products}/>
        </div>
    )
}

export default Products
