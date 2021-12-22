import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    <section>
      <select onChange={(e) => e.target.value}>
        <option value="vote_average">imdb rating</option>
        <option value="release_date">release date</option>
        <option value="original_title">alpabetically</option>
      </select>
      <button onClick={sortByTitle}>Sort by Title</button>

      {movies
        // .sort((a, b) => a.title.localeCompare(b.title))
        .map((movie) => (
          <Link key={movie.id} to={`/moviepage/${movie.id}`}>
            <h1>{movie.original_title}</h1>
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.title}
            />
          </Link>
        ))}
    </section>
  );
};

export default FirstPage;
