import React from "react";
import styled from "styled-components";

export const BigBox = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #f8f4e1;

  a {
    width: 300px;
    text-decoration: none;
    color: black;
    margin: 10px;
  }

  img {
    /* position: relative; */
    background: #c8eed9;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
  }

  img:hover {
    filter: sepia(80%);
  }
`;

export const MovieBox = styled.div`
  position: relative;
  display: flex;
`;

export const InfoBox = styled.div`
  color: #4e3620;
  padding: 10px 20px 20px;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  background: #c8eed9;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;

  :hover {
    background: rgba(0, 0, 0, 0.75);
    color: white;
    transition: 0.2s;
    opacity: 1;
  }

  h1 {
    margin: 0;
    padding: 5px;
  }

  p {
    margin: 0;
    padding: 5px;
  }
`;
