import {ADD_CRYPTO,REMOVE_CRYPTO} from '../ActionTypes';

const initState = {
  cryptos:[]
};

const FavReducer = ( state= initState,action ) =>{
    const DuplicateCryptos = [...state.cryptos];
    switch(action.type){
        case ADD_CRYPTO:
            DuplicateCryptos.push(action.payload);
            return{
                ...state,
                cryptos:DuplicateCryptos
            }
        case REMOVE_CRYPTO:
            return {
                ...state,
                cryptos:DuplicateCryptos.filter(c=>c.id !== action.payload)
            }
        default:
            return state;
    }
}

export default FavReducer;