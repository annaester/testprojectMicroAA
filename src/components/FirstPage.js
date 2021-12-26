import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchMovie from "./SearchMovie";
import { BigBox, MovieBox, InfoBox } from "./Theme";

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
      <div>
        <button onClick={sortByTitle}>Sort by Title</button>
        <button onClick={sortByDate}>Sort by Release Date</button>
        <button onClick={sortByRating}>Sort by Rating</button>
      </div>
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
