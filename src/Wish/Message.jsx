import React,{useState} from "react";
let Message=()=>{
    let [message,setMessage]=useState("Hello");
    return (
    <>
    <div className="container md-5">
    <div className="row">
    <div className="col-mt-8">
    <div className="card">
    <div className="card-Header">{message}</div>
    <div className="card-body">
    <button className="btn btn-primary mr-5"    onClick={() => {setMessage("Hello, GM")}}>GM</button>
    <button className="btn btn-primary mr-5"  onClick={() => {setMessage("Hello, GA");}}>GA</button>
    <button className="btn btn-primary mr-5" onClick={() => {setMessage("Hello,GN");}}>GN</button>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
)}
export default Message;