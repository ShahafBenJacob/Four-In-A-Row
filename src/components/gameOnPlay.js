import React from "react";
import { game } from "./gameSetting";

class GameOnPlay extends React.Component {
  render() {
    return (
      <div className={"home-page-wrapper"}>
        <h1 className={"main-title"}>{game.board.matrix.numberOfRows}</h1>
        <h1 className={"main-title"}>{game.board.matrix.numberOfColumns}</h1>
      </div>
    );
  }
}

export default GameOnPlay;
