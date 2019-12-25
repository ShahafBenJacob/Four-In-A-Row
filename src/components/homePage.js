import React from "react";
import GameSetting from "./gameSetting";
import { Link } from "react-router-dom";

class HomePage extends React.Component {

  render() {
    return (
      <div className={"home-page-wrapper"}>
        <h1 className={"main-title"}>Four In a Row</h1>
        <Link style={{ textDecoration: "none" }} to="/gameSetting">
          <button className={"play-game-btn"}>
            PLAY NOW
          </button>
        </Link>
      </div>
    );
  }
}

export default HomePage;
