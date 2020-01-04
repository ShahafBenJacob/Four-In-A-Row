import React from "react";
import { game } from "./gameSetting";
import Board from "./board";
import { Link } from "react-router-dom";
import Coin from "./coin";
import colors from "../api/variabels";
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
      board: game.board.matrix.matrixArray,
    };
  }

  winner = () => {
    alert(`${game.currentPlayer.id} winner!`);
    game.setBoard(
      game.board.matrix.numberOfRows,
      game.board.matrix.numberOfColumns
    );
    game.resetGameStatus();
    this.setState({
      board: game.board.matrix.matrixArray
    });
  };

  fullBoard = () => {
    alert("full board");
    game.setBoard(
      game.board.matrix.numberOfRows,
      game.board.matrix.numberOfColumns
    );
    game.resetGameStatus();
    this.setState({
      board: game.board.matrix.matrixArray
    });
  };

  correctMove = () => {
    this.setState({
      currPlayer: game.getCurrentPlayer(),
      board: game.board.matrix.matrixArray
    });
  };

  illegalMove = () => {
    alert("Pick another column! This column is full of coins!");
  };

  move = i => {
    game.move(i + 1);
    const gameStatus = game.game_status;
    const winner = gameStatus.winner;
    const fullBoard = gameStatus.fullBoard;
    const correctMove = gameStatus.correctMove;
    if (winner) {
      setTimeout(() => this.winner(), 200);
      this.setState({
        board: game.board.matrix.matrixArray
      });
    } else if (fullBoard) {
      setTimeout(() => this.fullBoard(), 200);
      this.setState({
        board: game.board.matrix.matrixArray
      });
    } else if (correctMove) {
      this.correctMove();
    } else {
      this.illegalMove();
    }
  };

  resetGame = (numOfPlayers) => {
    game.reset_game(game.board.matrix.numberOfRows, game.board.matrix.numberOfColumns, numOfPlayers)
    this.setState({
      currPlayer: game.getCurrentPlayer(),
      board: game.board.matrix.matrixArray
    });
  }

  render() {
    const matrix = this.state.board;
    const numofplayers = this.props;
    return (
      <div className={"game-on-play-wrapper"}>
        <div className={"game-on-play-header"}>
          <h1 className={"main-title game-on-play-main-title"}>
            Four In a Row
          </h1>
          <div className={"btns-setting-wrapper"}>
          <Link style={{ textDecoration: "none"}} to={"/gameSetting"}>
            <button className={"back-to-setting-btn btn"}>
              Change Game Setting
            </button>
          </Link>
          <button className={"reset-btn btn"} onClick={() => this.resetGame(numofplayers)}>
              Reset Game Setting
            </button>
            </div>
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
