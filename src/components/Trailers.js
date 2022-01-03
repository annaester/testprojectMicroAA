import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_MOVIE_TRAILER } from "utils/urls";
import styled from "styled-components";

const TrailerBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  h4 {
    margin: 10px;
  }
`;

const TrailerLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Trailers = () => {
  const [movieTrailer, setMovieTrailer] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(API_MOVIE_TRAILER(id))
      .then((res) => res.json())
      .then((data) => setMovieTrailer(data.results));
  }, []);

  return (
    <TrailerBox>
      <h4>Watch the trailers:</h4>
      <TrailerLinks>
        {movieTrailer
          .filter((trailer) => trailer.type === "Trailer")
          .map((trailer) => (
            <>
              <a
                href={`https://www.youtube.com/watch?v=${trailer.key}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {trailer.name}
              </a>
            </>
          ))}
      </TrailerLinks>
    </TrailerBox>
  );
};

export default Trailers;
