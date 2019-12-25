import React from "react";
import HomePage from "./components/homePage";
import GameSetting from "./components/gameSetting";

import "./css/homePage.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/gameSetting" component={GameSetting} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
