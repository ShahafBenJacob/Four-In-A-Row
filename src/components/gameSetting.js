import React from "react";
import { Link } from "react-router-dom";
import NumOfPlayersButtons from "./numOfPlayersButtons";
import BoardSizeButtons from "./boardSizeButtons";

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
    game.setBoard(rowsCols[0], rowsCols[1]);
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

  checkFullSetting = () => {
    if (this.state.numOfPlayers === "" && this.state.boardSize === "") {
      alert("You must choose the setting of the game!");
    } else if (this.state.numOfPlayers === "") {
      alert(
        "You need to choose number of players. If you like to play with the computer, please click on 1"
      );
    } else if (this.state.boardSize === "") {
      alert("You need to choose size of the board");
    } else {
      return;
    }
  };

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
            <NumOfPlayersButtons
              value={"1"}
              numOfPlayers={this.state.numOfPlayers}
              setPlayers={this.setPlayers}
            />
            <NumOfPlayersButtons
              value={"2"}
              numOfPlayers={this.state.numOfPlayers}
              setPlayers={this.setPlayers}
            />
          </div>

          <h2 className={"setting-titles"}>
            Choose Size of the Board:{" "}
            <span className={"sub-title"}> rows / columns </span>
          </h2>
          <div className={"board-size-wrapper"}>
            <BoardSizeButtons
              value={"7 / 8"}
              boardSize={this.state.boardSize}
              setBoardSize={this.setBoardSize}
              width={"160"}
              height={"140"}
            />
            <BoardSizeButtons
              value={"6 / 7"}
              boardSize={this.state.boardSize}
              setBoardSize={this.setBoardSize}
              width={"140"}
              height={"120"}
            />
            <BoardSizeButtons
              value={"5 / 6"}
              boardSize={this.state.boardSize}
              setBoardSize={this.setBoardSize}
              width={"120"}
              height={"100"}
            />
          </div>
          <Link
            style={{ textDecoration: "none" }}
            to={
              this.state.numOfPlayers !== "" && this.state.boardSize !== ""
                ? "/GameOnPlay"
                : "/gameSetting"
            }
          >
            <div className={"perfect-center"}>
              <button
                className={"start-game-btn btn"}
                onClick={() => this.checkFullSetting()}
              >
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
