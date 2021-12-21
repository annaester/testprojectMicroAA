import React from "react";

const FirstPage = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.original_title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ))}
    </div>
  );
};

export default FirstPage;
