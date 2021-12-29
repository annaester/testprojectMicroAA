import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchMovie from "./SearchMovie";
import { BigBox, MovieBox, InfoBox } from "./Theme";

const SortBox = styled.div`
  background: #897853;
  height: 70px;
  display: flex;
  align-items: center;
`;

const SortBtn = styled.button`
  padding: 10px;
  background: #c8eed9;
  color: #4e3620;
  font-weight: bold;
  border-radius: 50px;
  border: none;
  margin: 15px 10px;

  :hover {
    color: white;
    cursor: pointer;
  }
`;

const FirstPage = ({ movies }) => {
  const [movieList, setMovieList] = useState(movies);

  const sortByTitle = () => {
    const sorted = [
      ...movies.sort((a, b) => {
        return a.title.localeCompare(b.title);
      }),
    ];
    setMovieList(sorted);
  };

  const sortByDate = () => {
    const sorted = [
      ...movies.sort(
        (a, b) => Date.parse(b.release_date) - Date.parse(a.release_date)
      ),
    ];
    setMovieList(sorted);
  };

  const sortByRating = () => {
    const sorted = [
      ...movies.sort((a, b) => {
        return b.vote_average - a.vote_average;
      }),
    ];
    setMovieList(sorted);
  };

  return (
    <>
      <SearchMovie />
      <SortBox>
        <SortBtn onClick={sortByTitle}>Sort by Title</SortBtn>
        <SortBtn onClick={sortByDate}>Sort by Release Date</SortBtn>
        <SortBtn onClick={sortByRating}>Sort by Rating</SortBtn>
      </SortBox>
      <BigBox>
        {movies
          // .sort((a, b) => a.title.localeCompare(b.title))
          .map((movieList) => (
            <MovieBox key={movieList.id}>
              <Link to={`/moviepage/${movieList.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movieList.poster_path}`}
                  alt={movieList.title}
                />
                <InfoBox>
                  <h1>{movieList.original_title}</h1>
                  <p>Release: {movieList.release_date}</p>
                  <p>IMDB rating: {movieList.vote_average}</p>
                </InfoBox>
              </Link>
            </MovieBox>
          ))}
      </BigBox>
    </>
  );
};

export default FirstPage;
