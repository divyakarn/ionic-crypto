import {GetSupportedCurrencies} from './api';
import React, { useEffect, useState,createContext, useContext } from 'react';
import axios from 'axios';

const cryptoContext = createContext({});
function CryptoContext({children}) {

    //console.log(props);
    const [currency, setCurrencies] = useState('INR');
    const [symbol, setSymbol] = useState('₹');
  
    // const currencies = async ()=>{
    //     return axios.get(GetSupportedCurrencies())
    //     .then(response=>{
    //        setCurrencies({currency:response });
    //     })
    //     .catch(error=>{
    //         console.log(error);
    //     })
    // }

    useEffect(()=>{
        if(currency === 'INR')setSymbol("₹")
        else if(currency === 'USD')setSymbol("$")
    },[currency])
  return (
    <cryptoContext.Provider value = {{currency,symbol,setCurrencies,setSymbol}}>{children}</cryptoContext.Provider>
  )
}

export default CryptoContext;

export const CryptoState = ()=>{
    return useContext(cryptoContext);
}

