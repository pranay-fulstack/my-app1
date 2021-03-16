import react from "react"
import { BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Navbar from "./Routing/Navbar";
import ContactList from "./ContactList";

function App(){
  return(
    <>
    <Router>
    <Navbar/>
    <Switch>
    <Route exact path ="/home" component={ContactList} />
    <Route exact path ="/aboutus" />
    <Route exact path ="/contactlist"/>
    <Route exact path ="/contactus" />
    
    
    </Switch>

    </Router>
    </>
  );
}
export default App;
