import React from "react";
import { game } from "./gameSetting";
import Board from "./board";
import { Link } from "react-router-dom";
import Coin from "./coin";
import {colors} from '../api/variabels';
import { tada } from "react-animations";
import styled, { keyframes } from "styled-components";
const Wow = styled.div`
  animation: 2s ${keyframes`${tada}`} infinite;
`;

class GameOnPlay extends React.Component {
  constructor() {
    super();
    this.state = {
      currPlayer: game.getCurrentPlayer(),
      board: game.board.matrix.matrixArray
    };
  }

  confirmationDialog = name => {
    if (window.confirm(`${name} Win! Another game?`)) {
      game.setBoard(
        game.board.matrix.numberOfRows,
        game.board.matrix.numberOfColumns
      );
      this.setState({
        board: game.board.matrix.matrixArray
      });
    } else {
      alert("O.K bye bye!");
    }
  };

  

  move = i => {
    const makeAMove = game.move(i + 1);
    if (typeof makeAMove == "object") {
      setTimeout(() => this.confirmationDialog(makeAMove.id), 500);
      this.setState({
        board: game.board.matrix.matrixArray
      })
      return true
    } else if (makeAMove) {
      this.setState({
        currPlayer: game.getCurrentPlayer(),
        board: game.board.matrix.matrixArray
      });
    } else if (!makeAMove) {
      alert("Pick another column! This column is full of coins!");
    }
  };

  render() {
    const matrix = this.state.board;
    return (
      <div className={"game-on-play-wrapper"}>
        <div className={"game-on-play-header"}>
          <h1 className={"main-title game-on-play-main-title"}>
            Four In a Row
          </h1>
          <Link style={{ textDecoration: "none" }} to={"/gameSetting"}>
            <button className={"back-to-setting-btn btn"}>
              Back to Setting Page
            </button>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <button className={"back-to-setting-btn btn"}>
              Start a New Game
            </button>
          </Link>
        </div>

        <div className={"main-game-section row"}>
          <div className={"col-5"}>
            <h2
              className={"game-sub-title"}
              style={{ display: "flex", alignItems: "center" }}
            >
              <span style={{ color: colors.yellow }}>Turn Of: </span>
              <span style={{ padding: "0 20px" }}>
                {this.state.currPlayer.id}
              </span>
              <Wow>
                <Coin color={this.state.currPlayer.color} />
              </Wow>
            </h2>
            <div>
              <h2 className={"game-sub-title"} style={{ color: colors.yellow }}>
                Winning Table:
              </h2>
              <h3
                className={"game-sub-title"}
              >{`Player 1: ${game.player1.numberOfWins}`}</h3>
              <h3
                className={"game-sub-title"}
              >{`Player 2: ${game.player2.numberOfWins}`}</h3>
            </div>
          </div>
          <Board matrix={matrix} moveFunc={this.move} />
        </div>
      </div>
    );
  }
}

export default GameOnPlay;
