import React from "react";
import EmptySquare from './emptySquare';
import Coin from './coin';

const Square = (props) => {
  const color = props.color;
  return (
    <div className={"square"}>
      {color === "empty" ? <EmptySquare/> : <Coin color={color}/>}
      
    </div>
  );
}

export default Square;
