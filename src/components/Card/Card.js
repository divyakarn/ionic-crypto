import React, { Fragment } from 'react';
import {CryptoState} from '../../config/Currency'

function Card(props) {
  const {index,item} = props;
  const {currency,symbol,setCurrencies,setSymbol} = CryptoState();
  
  const customStyles = {
    color:'#ffc107',
  }
  
  
  const CardClickHandler = (item) =>{

   //console.log("value of clicked card",item,props);
   props.MoreDetails(item)
  }





  return (
   <Fragment>
     {
       props?(<div className='' onClick={()=>CardClickHandler(item)}  style={{width:"350px" ,marginLeft:"15px",marginRight:"10px" ,marginTop:'15px',boxShadow:'1px 1px 1px 1px #e9e9e9' ,borderRadius:'6px'}}>
    <div className="card text-center  " >
    <div className="card-body bg-dark text-white">
        <div style={{width:'80px',height:'80px',margin:'0 auto'}}>
        <img src={item?item.image:'no image'} style={{width:'70px',height:'70px',objectFit:'cover'}} alt=""/>
        </div>
        <h5 className="card-title" >{item?item.name:'no Name'}</h5>
        <p ><span style={{fontWeight:'Bold',color:'#ffc107'}}> Rank:</span>{item.market_cap_rank}</p> 
        <p className="card-text"><span style={{fontWeight:'Bold',color:'#ffc107'}}>Price:</span> {symbol}{item.current_price.toLocaleString()}</p>
        <span style={{color:'#ffc107'}}>Price Change percent</span>
        {item.price_change_percentage_24h<0?(<p className='text-danger'>
        <span style={{fontWeight:'bold',color:'tomato'}}>
        {item.price_change_percentage_24h}
        </span>
        </p>):(<p className='text-success'>
        <span style={{fontWeight:'bold',color:'#059862'}}>
        {item.price_change_percentage_24h}
        </span>
        </p>)}
        {/* <button href="#" className="btn btn-primary">More Details</button> */}
    </div>
    </div>
      
    </div>):'No Content'
     }
   </Fragment>
    
  )
}

export default Card
