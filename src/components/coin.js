import React from "react";
import { colors } from "../api/variabels";

const Coin = (props) => {
  const color = props.color;
  return (
    <div
      className={"coin"}
      style={{
        backgroundColor: color === colors.red ? colors.red : colors.yellow,
        border:
          color === colors.red
            ? `2px solid ${colors.secondRed}`
            : `2px solid ${colors.secondYellow}`
      }}
    >
      <div
        className={"inner-coin"}
        style={{
          backgroundColor: color === colors.red ? colors.red : colors.yellow,
          border:
            color === colors.red
              ? `2px solid ${colors.secondRed}`
              : `2px solid ${colors.secondYellow}`,
          boxShadow:
            color === colors.red
              ? `2px 2px 5px ${colors.secondRed}`
              : `2px 2px 5px ${colors.secondYellow}`
        }}
      >
        <i
          className="fas fa-star-half-alt"
          style={{
            color:
              color === colors.red ? colors.secondRed : colors.secondYellow,
            fontSize: "40px"
          }}
        ></i>
      </div>
    </div>
  );
}

export default Coin;
