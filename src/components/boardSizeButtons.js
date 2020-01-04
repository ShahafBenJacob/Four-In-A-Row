import React from "react";
import colors from "../api/variabels";

const BoardSizeButtons = props => {
  const { value, boardSize, setBoardSize, width, height } = props;
  return (
    <button
      className={"board-size-btn btn"}
      value={value}
      onClick={e => setBoardSize(e.target.value)}
      style={{
        backgroundColor:
          boardSize === value
            ? `${colors.buttonRed}`
            : `${colors.red}`,
        border: boardSize === value ? `5px solid ${colors.red}` : "",
        width: `${width}px`,
        height: `${height}px`
      }}
    >
      {value}
    </button>
  );
};

export default BoardSizeButtons;
