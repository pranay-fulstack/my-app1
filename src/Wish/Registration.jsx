import React,{useState} from "react";
let Registration =()=>{
  let [user,setUser]=useState({
    name:"",
    age:"",
    email:"",
  });
    let Pranay=(event)=>{
      setUser=({...user, [event.target.name]:event.target.value})

    };
    let Pranav=(event)=>{
      setUser=({...user, [event.target.name]:event.target.value})
    };

  return(
    <>
    <div className="container mt-5">
    <div className="row">
    <div className="col md-4">
    <form onSubmit={Pranav}>
    <div className="form-group"><input className="form-control" type="text" name="name" placeholder="name" onChange={Pranay}/></div>
    <div className="form-group"><input className="form-control" type="text" name="age" placeholder="age" onChange={Pranay}/></div>
    <div className="form-group"><input className="form-control" type="text" name="email" placeholder="email" onChange={Pranay}/></div>
    <div classname="form-group"><input className="btn btn-success form-control" type="submit"/></div>
    </form></div>
    <div className="col md-4">
    <div className="card">
    <div className="card-header"></div>
    <div className="card-body">
    <ul>
    <li>{user.name}</li>
    <li>{user.age}</li>
    <li>{user.email}</li>
    </ul>
    
    
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}
export default Registration;