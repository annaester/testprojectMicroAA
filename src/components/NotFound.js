import React from "react";
import styled from "styled-components";
import { BsFillSkipBackwardFill } from "react-icons/bs";

const NotFoundSite = styled.body`
  background: grey;
  height: 100vh;
`;

const NotFoundBox = styled.div`
  font-size: 25px;
  text-align: center;

  h1 {
    margin: 0;
    padding: 50px;
  }
`;

const BackLink = styled.a`
  margin: 50px;
  position: absolute;
`;

const NotFound = () => {
  return (
    <NotFoundSite>
      <BackLink href="/">
        <BsFillSkipBackwardFill size="50px" color="white" />
      </BackLink>
      <NotFoundBox>
        <h1>Sorry, no movie found</h1>
      </NotFoundBox>
    </NotFoundSite>
  );
};

export default NotFound;
