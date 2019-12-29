import React from "react";
import {colors} from '../api/variabels';

const NumOfPlayersButtons = props => {
  const {value, numOfPlayers, setPlayers} = props;
  return (
    <button
      className={"num-of-player-btn btn"}
      value={value}
      onClick={e => setPlayers(e.target.value)}
      style={{
        backgroundColor:
        numOfPlayers === value
            ? `${colors.buttonRed}`
            : `${colors.red}`,
        border: numOfPlayers === value ? `5px solid ${colors.red}` : ""
      }}
    >
      {value}
    </button>
  );
};

export default NumOfPlayersButtons;
