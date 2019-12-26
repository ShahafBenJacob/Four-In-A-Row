import React from "react";
import { Link } from "react-router-dom";

const Game = require("../api/game");
export const game = new Game();

class GameSetting extends React.Component {
  constructor() {
    super();
    this.state = {
      boardSize: "",
      numOfPlayers: ""
    };
  }
  setBoardSize = value => {
    const rowsCols = value.split("/");
    game.setBoard((rowsCols[0]), rowsCols[1]);
    this.setState({
      boardSize: value
    });
  };

  setPlayers = value => {
    game.setPlayers(value);
    this.setState({
      numOfPlayers: value
    });
  };

  checkFullChecking = () => {
    if (this.state.numOfPlayers === "" && this.state.boardSize === ""){
      alert("You must choose the setting of the game!")
    } else if (this.state.numOfPlayers === ""){
      alert("You need to choose number of players. If you like to play with the computer, please click on 1")
    } else if (this.state.boardSize === "") {
      alert("You need to choose size of the board")
    } else {
      return
    }
  }

  render() {
    return (
      <div className={"game-setting-wrapper"}>
        <h1
          className={"game-setting-main-title"}
          style={{ textAlign: "center" }}
        >
          Game Setting
        </h1>
        <div>
          <h2 className={"setting-titles"}>Choose Number Of Players:</h2>
          <div className={"num-of-player-wrapper"}>
            <button
              className={"num-of-player-btn btn"}
              value="1"
              onClick={e => this.setPlayers(e.target.value)}
              style={{
                backgroundColor:
                  this.state.numOfPlayers === "1" ? "#FF1800" : "#C31B0A",
                border:
                  this.state.numOfPlayers === "1" ? "5px solid #C31B0A" : ""
              }}
            >
              1
            </button>
            <button
              className={"num-of-player-btn btn"}
              value="2"
              onClick={e => this.setPlayers(e.target.value)}
              style={{
                backgroundColor:
                  this.state.numOfPlayers === "2" ? "#FF1800" : "#C31B0A",
                border:
                  this.state.numOfPlayers === "2" ? "5px solid #C31B0A" : ""
              }}
            >
              2
            </button>
          </div>

          <h2 className={"setting-titles"}>
            Choose Size of the Board:{" "}
            <span className={"sub-title"}> rows / columns </span>
          </h2>
          <div className={"board-size-wrapper"}>
            <button
              className={"board-size-btn btn"}
              value="7/8"
              onClick={e => this.setBoardSize(e.target.value)}
              style={{
                backgroundColor:
                  this.state.boardSize === "7/8" ? "#FF1800" : "#C31B0A",
                border:
                  this.state.boardSize === "7/8" ? "5px solid #C31B0A" : "",
                width: "160px",
                height: "140px"
              }}
            >
              7 / 8
            </button>
            <button
              className={"board-size-btn btn"}
              value="6/7"
              onClick={e => this.setBoardSize(e.target.value)}
              style={{
                backgroundColor:
                  this.state.boardSize === "6/7" ? "#FF1800" : "#C31B0A",
                border:
                  this.state.boardSize === "6/7" ? "5px solid #C31B0A" : "",
                width: "140px",
                height: "120px"
              }}
            >
              6 / 7
            </button>
            <button
              className={"board-size-btn btn"}
              value="5/6"
              onClick={e => this.setBoardSize(e.target.value)}
              style={{
                backgroundColor:
                  this.state.boardSize === "5/6" ? "#FF1800" : "#C31B0A",
                border:
                  this.state.boardSize === "5/6" ? "5px solid #C31B0A" : "",
                width: "120px",
                height: "100px"
              }}
            >
              5 / 6
            </button>
          </div>
          <Link style={{ textDecoration: "none" }} to= {this.state.numOfPlayers !== "" && this.state.boardSize !== "" ? "/GameOnPlay" : "/gameSetting"}>
            <div className={"perfect-center"}>
              <button className={"start-game-btn btn"}
              onClick={ () => this.checkFullChecking()}>
                Let the Game Begin
              </button>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default GameSetting;