const actiontypes = ()=>{
    return{
        productCatalog:{
            set: 'PRODUCT_CATALOG_SET'
        },
        product:{
            set:'SET_PRODUCT',
            clear:'PRODUCT_CLEAR'
        },

        cart: 
        {
        add:'ADD_ITEM',
        sub:'SUB_ITEM',
        remove:'REMOVE_FROM_CART',
        set:'SET_CART',
        clear:'CLEAR_CART'
        }
    }
}

export default actiontypes;