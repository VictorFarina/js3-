const actiontypes = ()=>{
    
    return{

        productCatalog:{
            set: 'PRODUCT_CATALOG_SET'
        },

        
        product:{
            set:'SET_PRODUCT',
            clear:'PRODUCT_CLEAR'
        },


        cart: {
        add:'ADD_ITEM',
        sub:'SUB_ITEM',
        remove:'REMOVE_FROM_CART',
        set:'SET_CART',
        clear:'CLEAR_CART'
        },


        user:{
            register:'REGISTER_USER',
            login:'LOGIN_USER',
            logout:'LOG_OUT',
            update:'UPDATE_USER'
      
        }
    }
}

export default actiontypes;