import React,{useState}from 'react';
let Counter= ()=>{
    let [count,setCount] = useState(1);
   
     return      <React.Fragment>
        <div className ="container mt-5">
        <div className ="row ">
        <div className ="col-md-6">
        <div className ="card">
        <div className ="card-header">{count}</div>
        <div className ="card-body">
        <button className="btn btn-primary" onClick={()=>{setCount(count+1)}}> incr Counter</button>&&
        <button className ="btn btn-success" onClick={()=>{setCount(count-1)}}> Decr Counter</button>
        </div>
        </div>
        </div>
        </div>
        </div>
            
        </React.Fragment>
    

    }
export default Counter;
