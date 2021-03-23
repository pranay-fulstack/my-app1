import React from "react"; 
import User from "./LifeCycle/User";
import Login from "./LifeCycle/Login";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Time from "./LifeCycle/Time";
import Navbar from "./LifeCycle/Navbar";
function App (){
  return(
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route exact path="/User" component={User}></Route>
      <Route exact path="/Login" component={Login}></Route>
      <Route exact path="/Digital" component={Time}></Route>
    </Switch>
  </Router>

    
    </>
  )
}
export default App;