import React from "react";
import "./App.css";
import Header from "./components/Header";
import  {Switch,Route} from 'react-router-dom';
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Upload from "./components/Upload";
import Content from "./components/Content";

const App = () => {
  
  return (
    <React.Fragment>
      <Header/>
    <Switch>
      <Route exact path="/" component={Content}/>   
      <Route path="/signup" component={Signup} />
      <Route path="/signin" component={Signin} />
      
      <Route path="/upload" component={Upload}/> 
      </Switch>
    </React.Fragment>
  );
};

export default App;