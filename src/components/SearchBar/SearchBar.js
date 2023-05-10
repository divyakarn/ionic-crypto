import React from 'react'

function SearchBar(props) {
  
  let searchString = ''

  const HandleEvent =(event)=>{
    //console.log(event.target.value);
    //console.log("these are props",props);
    searchString = event.target.value
    console.log(searchString);
  }
  const HandleButtonEvent =()=>{
    if(searchString){
      console.log(searchString);
    }
  }
  
  return (
    <div>
    <div className="input-group ">
        <input type="text" className="form-control bg-dark text-white" onChange={(event)=> HandleEvent(event)} placeholder='Enter the name of crypto'/>
        <button className="btn btn-outline-warning" onClick={()=> HandleButtonEvent()}   aria-label="" type="button" id="inputGroupFileAddon04">Search</button>
   </div>
      
    </div>
  )
}

export default SearchBar;
