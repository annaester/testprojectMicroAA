import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { SEARCH_URL } from "utils/urls";
import { API_KEY } from "utils/urls";
import { BigBox, MovieBox, InfoBox } from "./Theme";
import styled from "styled-components";

const SearchBox = styled.div`
  background: #897853;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  text-align: right;

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 5px;
    background-image: url("../pictures/cinema-unsplash.jpg");
    background-position: center;
    background-size: contain;
    height: 200px;
  }

  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;

    @media (max-width: 700px) {
      flex-direction: column;
      align-items: flex-end;
    }
  }

  label {
    font-weight: bold;
    color: white;
    margin: 5px;

    @media (max-width: 700px) {
      font-size: 15px;
    }
  }

  input {
    padding: 10px;
    border-radius: 50px;
    border: none;
    width: 200px;
    margin: 5px;

    @media (max-width: 700px) {
      padding: 5px;
      text-align: right;
    }
  }

  button {
    padding: 5px 10px;
    background: #c8eed9;
    color: #4e3620;
    font-weight: bold;
    border-radius: 50px;
    border: none;
    width: 70px;
    align: right;

    @media (max-width: 700px) {
      margin: 5px;
      font-size: 10px;
    }
  }

  button:hover {
    color: white;
    cursor: pointer;
  }

  img {
    align-self: left;

    @media (max-width: 700px) {
      width: 40px;
      padding: 5px;
    }
  }
`;

const SearchMovie = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [foundMovie, setFoundMovie] = useState([]);

  const callSearchFunction = async (e) => {
    e.preventDefault();
    console.log("submitting");

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchMovie}&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setFoundMovie(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <SearchBox>
        <img src="../pictures/tmdblogo.svg" width="70px" alt="tmdblogo" />
        <form onSubmit={callSearchFunction}>
          <label htmlFor="search">Search movie</label>
          <input
            name="search"
            placeholder="...movie"
            value={searchMovie}
            onChange={(e) => setSearchMovie(e.target.value)}
            type="text"
          />
          <button type="submit" value="search">
            Search
          </button>
        </form>
      </SearchBox>
      <BigBox>
        {foundMovie
          .filter((movie) => movie.poster_path)
          .sort(
            (a, b) => Date.parse(b.release_date) - Date.parse(a.release_date)
          )
          .map((movie) => (
            <MovieBox key={movie.id}>
              <Link to={`/moviepage/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt={movie.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "../pictures/tmdblogo.svg";
                  }}
                />
                <InfoBox>
                  <h1>{movie.original_title}</h1>
                  <p>Release: {movie.release_date}</p>
                  <p>IMDB rating: {movie.vote_average}</p>
                </InfoBox>
              </Link>
            </MovieBox>
          ))}
      </BigBox>
    </>
  );
};

export default SearchMovie;
