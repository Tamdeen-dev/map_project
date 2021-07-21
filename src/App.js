
import React from "react";
import './App.css';
import { Switch, Route, Redirect,withRouter} from "react-router-dom";
import Home from "./Components/Home";
import FloorsMenu from "./Components/Menu/FloorsMenu";
import MallsMenu from "./Components/Menu/MallsMenu";
import Maps from "./Components/Maps";

function App() {
  return (
    <Switch>
      <Route exact path="/home"  component={Home} />
      <Route exact path="/malls" component={MallsMenu} />
      <Route exact path="/malls/floors/" component={FloorsMenu} />
      <Route exact path="/malls/floors/map" component={Maps} />
      <Redirect to="/home" />
    </Switch>
  
  );
}

export default withRouter(App);



