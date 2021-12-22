import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_MOVIE_DETAIL } from "utils/urls";

const MoviePage = () => {
  const [moviePage, setMoviePage] = useState({});
  const { id } = useParams();

  // const params = useParams();
  // console.log(params);

  useEffect(() => {
    fetch(API_MOVIE_DETAIL(id))
      .then((res) => res.json())
      .then((data) => setMoviePage(data));
  });

  return (
    <>
      <div>
        <h2>{moviePage.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500/${moviePage.backdrop_path}`}
          alt="movieposter"
        />
        <p>Overview: {moviePage.overview}</p>
        <p>Genres: {moviePage?.genres?.map((genre) => genre.name + ", ")} </p>
        <p>Language: {moviePage.original_language}</p>
        <p>Movie Page: {moviePage.homepage}</p>
        <p>
          Production companies:
          {moviePage?.production_companies?.map(
            (company) => company.name + ", "
          )}{" "}
        </p>
        <p>Length: {moviePage.runtime} min</p>
      </div>
    </>
  );
};

export default MoviePage;
