import React from "react";
import { Link } from "react-router-dom";
import { bounce } from "react-animations";
import styled, { keyframes } from "styled-components";

const Wow = styled.div`
  animation: 2s ${keyframes`${bounce}`} infinite;
`;
class HomePage extends React.Component {
  render() {
    return (
      <div className={"home-page-wrapper"}>
        <h1 className={"main-title"}>Four In a Row</h1>
        <Wow>
          <Link style={{ textDecoration: "none" }} to="/gameSetting">
            <button className={"play-game-btn btn"}>PLAY NOW</button>
          </Link>
        </Wow>
      </div>
    );
  }
}

export default HomePage;
