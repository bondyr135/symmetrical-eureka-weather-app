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

console.log(process.env.REACT_APP_API_KEY)

function App() {


  return (
    <Router >
      <div className="App">
        <Header className="app-header" />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/favorites' component={Favorites} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
