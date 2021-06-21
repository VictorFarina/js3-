import actiontypes from '../actiontypes';

export const addItem = product => {

    return {
        type:actiontypes().cart.add, 
        payload: product,
    }
}