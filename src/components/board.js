import React from "react";
import Square from "./square";

const Board = props => {
  const {matrix, moveFunc} = props;
  return (
    <div className={"board col-7"}>
      <div className={"square-wrapper"}>
        {matrix.map((row, i) => {
          return (
            <div key={i} style={{ display: "flex", flexDirection: "row" }}>
              {row.map((col, j) => (
                <div onClick={() => moveFunc(j)} key={j}>
                  <Square color={col} />
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
