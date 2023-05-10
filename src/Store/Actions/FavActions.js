import {ADD_CRYPTO,REMOVE_CRYPTO} from  '../ActionTypes';

export const StoreCryptoAction = (Crypto) =>{
    return{
        type: ADD_CRYPTO,
        payload: Crypto
    }
}

export const RemoveCryptoAction = (id) =>{
    return{
        type: REMOVE_CRYPTO,
        payload: id,
    }
}