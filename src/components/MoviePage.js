import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_MOVIE_DETAIL } from "utils/urls";
import { API_MOVIE_TRAILER } from "utils/urls";

const MoviePage = () => {
  const [moviePage, setMoviePage] = useState({});
  const [movieTrailer, setMovieTrailer] = useState({});
  const { id } = useParams();

  // const params = useParams();
  // console.log(params);

  useEffect(() => {
    fetch(API_MOVIE_DETAIL(id))
      .then((res) => res.json())
      .then((data) => setMoviePage(data));
  }, [id]);

  useEffect(() => {
    fetch(API_MOVIE_TRAILER(id))
      .then((res) => res.json())
      .then((data) => setMovieTrailer(data));
  }, []);

  // console.log(movieTrailer);

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
        {/* <div>
          {movieTrailer.map((trailer) => (
            <p>{trailer.key}</p>
          ))}
        </div> */}

        {/* <video width="750" height="500" controls> */}
        <a
          href={`https://www.youtube.com/watch?v=${movieTrailer.key}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch trailers
        </a>
        {/* </video> */}
      </div>
    </>
  );
};

export default MoviePage;
