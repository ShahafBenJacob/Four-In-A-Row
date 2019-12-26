import React from "react";

class GameSetting extends React.Component {
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
            <button className={"num-of-player-btn btn"} value="1">
              1
            </button>
            <button className={"num-of-player-btn btn"} value="1">
              2
            </button>
          </div>

          <h2 className={"setting-titles"}>
            Choose Size of the Board:{" "}
            <span className={"sub-title"}> columns / rows</span>
          </h2>
          <div className={"board-size-wrapper"}>
            <button
              className={"board-size-btn btn"}
              value="8/7"
              style={{ width: "160px", height: "140px" }}
            >
              8 / 7
            </button>
            <button
              className={"board-size-btn btn"}
              value="7/6"
              style={{ width: "140px", height: "120px" }}
            >
              7 / 6
            </button>
            <button
              className={"board-size-btn btn"}
              value="6/5"
              style={{ width: "120px", height: "100px" }}
            >
              6 / 5
            </button>
          </div>
          <div className={"perfect-center"}>
            <button className={"start-game-btn btn"}>Let the Game Begin</button>
          </div>
        </div>
      </div>
    );
  }
}

export default GameSetting;
