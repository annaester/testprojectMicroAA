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
    background: #c8eed9;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;

    @media (max-width: 700px) {
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      height: 250px;
      width: 300px;
      object-fit: cover;
    }
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

  @media (max-width: 700px) {
    padding: 10px 10px 15px 10px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  h1 {
    margin: 0;
    padding: 5px;

    @media (max-width: 700px) {
      font-size: 18px;
    }
  }

  p {
    margin: 0;
    padding: 5px;

    @media (max-width: 700px) {
      font-size: 12px;
    }
  }
`;
