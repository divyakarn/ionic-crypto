import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Currency, { CryptoState } from '../../config/Currency';
import axios from 'axios';


function Navigation() {


   let currencyList =[];
   let temp = ["some","other"];
   const {currency,symbol,setCurrencies,setSymbol} = CryptoState();
   console.log(currency);


  const pullData =(data)=>{
   currencyList = data;
   console.log(currencyList);
   

  }

  const dropdownValueChanged=(e)=>{
   console.log(e);
  }


  
  

  
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-warning">CryptoTracker</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-warning" id="navbarNav">
      <ul className="navbar-nav" style={{display: 'flex', justifyContent : 'space-between' ,alignItems: 'center'}}>
        <li className="nav-item"  >
          {/* <a  aria-current="page"> */}
          <Link className="nav-link " activeclassname="active"  to="/home">Home </Link>
          {/* Home</a> */}
        </li>
        <li className="nav-item ">
          {/* <a > */}
          <Link className="nav-link" activeclassname="active" to="/allCoins">AllCoins</Link>
          {/* WatchList</a> */}
        </li> 
        <li className="nav-item ">
          {/* <a > */}
          <Link className="nav-link"  activeclassname="active" to="/watchList"> WatchList</Link>
          {/* WatchList</a> */}
        </li> 
        
        {/* <li className="nav-item dropdown" >
          <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Currency
          </a>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2" >
            <li><a className="dropdown-item" onSelect={(e)=>dropdownValueChanged(e.target.value)} value={"INR"}>INR</a></li>
            <li><a className="dropdown-item" onSelect={(e)=>dropdownValueChanged(e.target.value)}value ={"USD"}>USD</a></li>
          </ul>
          
        </li> */}
      </ul>
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Navigation;
