import React from "react";
import styled from "styled-components";

export const BigBox = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: rgba(0, 0, 0, 0.75);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  a {
    width: 25%;
    text-decoration: none;
    color: black;
  }

  img {
    padding: 5px;
    position: relative;
  }
`;

export const MovieBox = styled.div`
  position: relative;
  display: flex;
  /* justify-content: center; */
`;

export const InfoBox = styled.div`
  position: absolute;
  padding: 10px 20px;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: 0;

  :hover {
    background: rgba(0, 0, 0, 0.75);
    color: white;
    transition: 0.2s;
    opacity: 1;
  }

  h1 {
    margin: 0;
    color: white;
    padding: 5px;
  }

  p {
    margin: 0;
    padding: 5px;
  }
`;
