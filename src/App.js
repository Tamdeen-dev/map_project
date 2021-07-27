
import React from "react";
import './App.css';
import { Switch, Route, Redirect,withRouter} from "react-router-dom";
import HomePage from "./Containers/HomePage";
import FloorsMenu from "./Components/FloorMenu";
import Malls from "./Containers/Malls"
import Maps from "./Components/Maps";

function App() {
  return (
    <Switch>
      <Route  path="/" exact component={HomePage} />
      <Route  path="/malls" exact component={Malls} />
      <Route  path="/floors/:required_floor_mall" exact component={FloorsMenu} />
      <Route  path="/maps/:required_floor" exact component={Maps} />
    </Switch>
  );
}

export default withRouter(App);



