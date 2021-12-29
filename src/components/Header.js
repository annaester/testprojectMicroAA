import React from "react";
import styled from "styled-components";

const TopBar = styled.header`
  background-image: url("../pictures/cinema-unsplash.jpg");
  background-position: center;
  background-size: contain;
  height: 400px;
  //background: rgb(41, 43, 42);
  color: white;
  margin: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 20px, 0, 0, 0;
    padding: 20px;
  }

  h2 {
    margin: 0;
    font-style: italic;
  }

  img {
    padding: 10px;
    align-self: end;
  }
`;

const Header = () => {
  return (
    <TopBar>
      <h1>TMDB's </h1>
      <h2>- most popular movies</h2>
      <img src="../pictures/tmdblogo.svg" width="50px" alt="tmdblogo" />
    </TopBar>
  );
};

export default Header;
