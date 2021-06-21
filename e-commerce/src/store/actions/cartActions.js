import actiontypes from '../actiontypes';

export const addItem = product => {



    return {
        type:actiontypes().cart.add, 
        payload: product,
    }
}
export const subItem = product => {

    return {
        type:actiontypes().cart.sub, 
        payload: product,
    }
}
export const removeItem = product => {

    return {
        
        type:actiontypes().cart.remove, 
        payload: product,
    }
}

