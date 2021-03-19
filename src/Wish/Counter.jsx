import React,{useState} from "react";
let Money =()=>{
   let [money,setMoney]=useState(0);
    return (
        <>
        <div className="container mt-5" >
        <div className="row">
        <div className="col md-8">
        <div className="card">
        <div className="card header">{money}</div>
        <div className="card-body">
        <button className="btn btn-primary mr-5" onClick={()=>{setMoney("Give 1000")}}>high</button>
        <button className="btn btn-success" onClick={()=>{setMoney("Give 500")}}>low</button>
        </div>
        </div>
        </div>
        </div>
        </div>
        </>

    )
}
export default Money;