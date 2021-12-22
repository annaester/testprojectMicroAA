import React from "react";
import { Link } from "react-router-dom";

const FirstPage = ({ movies }) => {
  return (
    <section>
      {movies.map((movie) => (
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
