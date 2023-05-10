import React, { useState,useEffect } from 'react';
import { CryptoState } from '../../config/Currency';
import {HistoricalChart} from '../../config/api';
import axios from 'axios';
import{ Line }from 'react-chartjs-2';
import loader from '../../assets/loader3.gif';
import Chart from 'chart.js/auto';


function CoinChart(props) {
    // console.log(props);
    const [historicalData,setHistoricalData] =useState([]);
    const [days,setDays] = useState(1); 
    const {currency,symbol,setCurrencies,setSymbol} = CryptoState();


    const fetchHistoricalData = ()=>{
        return axios.get(HistoricalChart(props.id,days, currency))
        .then(response=>{
         let localVar = response.prices
          setHistoricalData(localVar);
          console.log(historicalData);
          return response;
        })
        .catch(error=>{
            console.log(error);
        })
        
    };

    useEffect(()=>{
          fetchHistoricalData();
      },[currency])
    

  return (
    <div>
    {
     historicalData.length>0?<Line data ={{
         labels:historicalData.length>0 ?historicalData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }):'no data',
                datasets:[
                    {
                    data: historicalData.length>0 ?historicalData.map((coin) => coin[1]):'no data',
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: "#EEBC1D",
                  },
                ],}}
                options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}

     />:<img src={loader} alt="loading" style={{position: "absolute",top:"50%",left:"50%",transform: "translate(-50%, -50%)"}} />
    }
   

      
    </div>
  )
}

export default CoinChart;
