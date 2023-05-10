import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, useIonViewWillEnter,IonButtons } from '@ionic/react';
import Card from '../components/Card/Card';
import ExploreContainer from '../components/ExploreContainer';
import  Navigation  from '../components/Navigation/Navigation';
import SearchBar from '../components/SearchBar/SearchBar';
import './Home.css';
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {TrendingCoins} from '../config/api';
import Currency, { CryptoState } from '../config/Currency';
import loader from '../assets/loader3.gif';
import { Menu } from '../components/Navigation/Ion-nav/Menu';
import { NavButtons } from '../components/Navigation/Ion-nav/NavButtons';





const Home = (props) => {

  let list = [];
  let searchFieldValue= '';
  let cryptoBackup = [];
  let tempList = [];
  let history = useHistory();
  const customStyles = {
    color:'#ffc107',
  }


   const [cryptos, setCryptos] = useState([]);
   const {currency,symbol,setCurrencies,setSymbol} = CryptoState();
   console.log(currency);


  const userSearchOps = (event)=>{
    searchFieldValue = event;
    if(searchFieldValue != null){
       //Have to write code fro filtering here
       console.log(tempList);
          setCryptos({cryptos:tempList});
    }else{
      setCryptos({cryptos:cryptoBackup});
    }
    
  }
 

  const fetchApiData = ()=>{
   return axios.get(TrendingCoins(currency))
    .then(response=>{
      setCryptos(response);
      cryptoBackup = cryptos;
      return response;
    })
    .catch(error=>{
        console.log(error);
    })
  };

  const MoreDetails = (item)=>{
    console.log("card clicked",item);
    history.push('/details',{item: item});
  }

 



  useEffect(()=>{
    //if(cryptos.length === 0){
      fetchApiData();
    //}
  
  },[currency])
 



  


  return (
    <IonPage >
        <IonHeader >
          <IonToolbar style={{paddingLeft:'20px'}}>
            <IonTitle size="large" style={customStyles}>CryptoTracker</IonTitle>
            <IonButtons slot="end">
            <NavButtons/>
          </IonButtons>
          </IonToolbar>
        </IonHeader>
      <IonContent fullscreen >
       <div className="p-4 mt-3 ">
       <SearchBar 
         dataRecived = {userSearchOps.bind(this)}
       />
      </div>       
       <div className='d-flex flex-wrap align-content-start p-4' >
       {
         cryptos.length>0?
           (cryptos.map((item,i ) => {
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
  );
};

export default Home;

