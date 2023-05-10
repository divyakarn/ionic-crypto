import React, { Fragment } from 'react';
import {SingleCoin} from '../../config/api';
import axios from 'axios';
import {useEffect,useState} from 'react';
import HtmlReactParser from 'html-react-parser';
import {CryptoState}from '../../config/Currency';
import CoinChart from '../../components/Charts/CoinChart';
import loader from '../../assets/loader3.gif'
import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { NavButtons } from '../../components/Navigation/Ion-nav/NavButtons';
import {ADD_CRYPTO,REMOVE_CRYPTO} from '../../Store/ActionTypes'
import { useDispatch } from 'react-redux';
import{ StoreCryptoAction } from '../../Store/Actions'


function Details(props) {
  // console.log(props);
  
  let tempdata = [];
  let tempState = "";
  const dispatch = useDispatch();
  const [data,setData] = useState([]);
  const {currency,symbol,setCurrencies,setSymbol} = CryptoState();

  const fetchApiData = (id)=>{
    return axios.get(SingleCoin(id))
     .then(response=>{
       setData(response);
       console.log(setData)
       return response;
     })
     .catch(error=>{
         console.log(error);
     })
   };

   useEffect(()=>{
  fetchApiData(tempState.id);
  },[currency])

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const customStyles = {
    color:'#ffc107',
  }
  if(props.location.state){
  tempState = props.location.state.item;
  }
  const addToWatchList = (item)=>{
    console.log(item);
    dispatch(StoreCryptoAction(item))
  }

  // console.log(tempState);
  return ( 

    <IonPage>
    <IonHeader>
    <IonToolbar style={{paddingLeft:'20px'}}>
            <IonTitle size="large" style={customStyles}>CryptoTracker</IonTitle>
            <IonButtons slot="end">
            <NavButtons/>
          </IonButtons>
    </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <div style={{backgroundColor:'black',width:'100%',height:'100%'}}>
    <div className="container">
    <div className="row">
          
          <div className="col-md-2">
            <div className='leftsection '>
          <div className="box" style={{display:'flex',justifyContent: 'center',alignItems:'center',width:'100%',height:"100%"}}>
            <div className="logo" style={{width:'150px',height:'150px',borderRadius:'50%',backgroundColor:''}}>
            <img src={tempState.image} style={{objectFit:'cover'}} alt="" />
            </div>
          </div>
          <div style={{color:'white'}}>
              <h4>{data.name}</h4>
            </div>
            </div>
            <div className="crypto-info" style={customStyles}>
              <p style={customStyles}>{data.description?HtmlReactParser(data.description.en.split(". ")[0]): <img src={loader} alt="loading" style={{position: "absolute",top:"50%",left:"50%",transform: "translate(-50%, -50%)"}} />}</p>
            </div>
            <div className="rank" >
              <h4 style={customStyles}>Rank:<span style={{color:'white'}}>{data.market_data?data.market_data.market_cap_rank:<img src={loader} alt="loading" style={{position: "absolute",top:"50%",left:"50%",transform: "translate(-50%, -50%)"}} />}</span></h4>
            </div>
            <div className="price">
              <h4 style={customStyles}>Price:<span style={{color:'white'}}>{symbol}{data.market_data?(numberWithCommas(data.market_data.current_price.inr)):<img src={loader} alt="loading" style={{position: "absolute",top:"50%",left:"50%",transform: "translate(-50%, -50%)"}} />}</span></h4>
            </div>

            <div className="add">
            <button type="button" onClick={()=>addToWatchList(data)}  className="btn btn-warning mt-5">Add To WatchList</button>
              
            </div>
          
          </div>
          <div className="col-md-1">

          </div>
          <div className="col-md-8">
            <div className="rightSection">
              <CoinChart style ={{marginLeft:"80px", marginTop:'10px'}} id ={tempState.id}/>
            </div>
          </div>
          
          </div>

   </div>


   </div>



      </IonContent>

    </IonPage>
    
  //  <Fragment>
  
   
  
   
   
  )
}

export default Details;

