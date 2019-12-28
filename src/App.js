import React from "react";
import HomePage from "./components/homePage";
import GameSetting from "./components/gameSetting";
import GameOnPlay from "./components/gameOnPlay";
import './css/buttons.css';
import './css/general.css';
import './css/headers.css';
import './css/placeElements.css';
import './css/board.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/gameSetting" component={GameSetting} />
          <Route path="/GameOnPlay" component={GameOnPlay} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
