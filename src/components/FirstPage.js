import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BigBox, MovieBox, InfoBox } from "./Theme";
import styled from "styled-components";
import Header from "./Header";
import SearchMovie from "./SearchMovie";

const SortBox = styled.div`
  background: #f8f4e1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SortBtn = styled.button`
  padding: 10px;
  background: #c8eed9;
  color: #4e3620;
  font-weight: bold;
  border-radius: 50px;
  border: none;
  margin: 5px 10px;

  :hover {
    color: white;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    padding: 7px;
    margin: 5px;
    font-size: 10px;
  }
`;

const Titel = styled.h1`
  color: #4e3620;
  background: #f8f4e1;
  text-align: center;
  margin: 0;
  padding: 20px;

  @media (max-width: 700px) {
    font-size: 20px;
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
      <Header />
      <SearchMovie />
      <Titel>The 20 most popular movies in the US</Titel>
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
