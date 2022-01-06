import React from "react";
import styled from "styled-components";

const TopBar = styled.header`
  background-image: url("../pictures/cinema-unsplash.jpg");
  background-position: center;
  background-size: contain;
  height: 400px;
  color: #c8eed9;
  margin: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    display: none;
    }

  div {
    background: rgba(137, 120, 83, 0.8);
    border-radius: 50px;
    width: auto;
    padding: 0 15px 20px 15px;
  }

  h1 {
    margin: 10px;
    padding: 20px;
  }

  h2 {
    margin: 10px;
    padding: 10px
    font-style: italic;
  }
`;

const Header = () => {
  return (
    <TopBar>
      <div>
        <h1>TMDB's </h1>
        <h2>most popular movies</h2>
      </div>
    </TopBar>
  );
};

export default Header;
