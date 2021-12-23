import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BigBox = styled.section`
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

const MovieBox = styled.div`
  position: relative;
  display: flex;
  /* justify-content: center; */
`;

const InfoBox = styled.div`
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
    padding: 10px;
  }
`;

const FirstPage = ({ movies }) => {
  const [movieList, setMovieList] = useState(movies);

  const sortByTitle = () => {
    const sorted = [...movieList].sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    setMovieList(sorted);
  };

  // const [movie, setMovie] = useState([]);
  // const [sortMovies, setSortMovies] = useState("alphabetically");

  // useEffect(() => {
  //   const sortedMovies = (type) => {
  //     const types = {
  //       vote_average: "vote_average",
  //       release_date: "release_date",
  //       origina_title: "original_title",
  //     };
  //     const sortProperty = types[type];
  //     const sorted = [...movies].sort(
  //       (a, b) => b[sortProperty] - a[sortProperty]
  //     );
  //     console.log(sorted);
  //     setMovie(sorted);
  //   };

  //   sortedMovies(sortMovies);
  // }, [sortMovies]);

  // const sortTitle = () => {
  //   movies.sort((a, b) => a.title.localeCompare(b.title));
  // };

  return (
    <>
      <div>
        <select onChange={(e) => e.target.value}>
          <option value="vote_average">imdb rating</option>
          <option value="release_date">release date</option>
          <option value="original_title">alpabetically</option>
        </select>
        <button onClick={sortByTitle}>Sort by Title</button>
      </div>
      <BigBox>
        {movies
          // .sort((a, b) => a.title.localeCompare(b.title))
          .map((movie) => (
            <MovieBox>
              <Link key={movie.id} to={`/moviepage/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt={movie.title}
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

export default FirstPage;
