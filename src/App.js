import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/MainComp/Home/Home';
import Favorites from "./Components/FaveComp/Favorites/Favorites";


function App() {

  return (
    <div className="App">
      <Router basename={`${process.env.REACT_APP_BASE_URL}`}>
        <Header className="app-header" />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/favorites' component={Favorites} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
