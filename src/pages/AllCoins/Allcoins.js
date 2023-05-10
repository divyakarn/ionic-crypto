import React, { Fragment } from 'react';
import { useState,useEffect } from 'react';
import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, useIonViewWillEnter } from '@ionic/react';
import  Card from "../../components/Card/Card"
import SearchBar from '../../components/SearchBar/SearchBar';
import {useHistory} from 'react-router-dom';
import  Navigation  from '../../components/Navigation/Navigation';
import loader from '../../assets/loader3.gif';
import axios from 'axios';
import {CoinList} from '../../config/api';
import {CryptoState} from '../../config/Currency'
import { NavButtons } from '../../components/Navigation/Ion-nav/NavButtons';



function Allcoins(props) {
  
  let history = useHistory();
  const [allCoins,setAllCoins] = useState([]);
  const {currency,symbol,setCurrencies,setSymbol} = CryptoState();



  const MoreDetails = (item)=>{
    history.push('/details',{item: item});
  }


  const fetchAllCoins = ()=>{
    return axios.get(CoinList(currency))
    .then(response=>{
      console.log(response)
      setAllCoins(response);
      // cryptoBackup = cryptos;
      return response;
    })
    .catch(error=>{
        console.log(error);
    })
  };

  useEffect(()=>{
    fetchAllCoins();

  },[currency]);





  return (
    <IonPage >
    <IonHeader >
        <IonToolbar  style={{paddingLeft:'20px'}}>
          <IonTitle size="large">Crypto Tracker</IonTitle>
          <IonButtons slot="end">
            <NavButtons/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
     
    <IonContent fullscreen >
      
     <div className="p-4 mt-3 ">
     <SearchBar />
    </div>       
     <div className='d-flex flex-wrap align-content-start p-4'>
     {
       allCoins.length>0?
         (allCoins.map((item,i ) => {
          return (
             <Card
               MoreDetails= {(item)=> MoreDetails(item)}
               key= {i}
               item = {item}
             />
           );
       })):<img src={loader} alt="loading" style={{position: "absolute",top:"50%",left:"50%",transform: "translate(-50%, -50%)"}} />
    }
     
     </div>
      {/* <ExploreContainer /> */}
    </IonContent>
  </IonPage>
  )

  }

export default Allcoins
