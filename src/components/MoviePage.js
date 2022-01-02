import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_MOVIE_DETAIL } from "utils/urls";
import { API_MOVIE_TRAILER } from "utils/urls";
import styled from "styled-components";

const BackLink = styled.a`
  margin: 20px;
  position: absolute;
  color: white;
`;

const MovieSite = styled.section`
  display: flex;
  /* align-items: center; */
  justify-content: center;
`;

const MovieDetail = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;

  img {
    width: 700px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
  }
`;

const MovieInfo = styled.div`
  width: 670px;
  background: rgba(255, 255, 255, 0.6);
  padding: 15px 15px 30px 15px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;

  p,
  h2,
  a {
    margin: 10px;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: rgb(117, 0, 255);
  }
`;

const BackgroundImage = styled.img`
  position: relative;
  min-height: 100vh;
  max-width: 100vw;
  z-index: -1;
  -webkit-filter: blur(3px);
`;

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
      <BackLink href="/">go back</BackLink>
      <MovieSite>
        <BackgroundImage
          src={`https://image.tmdb.org/t/p/original/${moviePage.backdrop_path}`}
          alt="movieposter"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <MovieDetail>
          <img
            src={`https://image.tmdb.org/t/p/original/${moviePage.backdrop_path}`}
            alt="movieposter"
          />
          <MovieInfo>
            <h2>{moviePage.title}</h2>
            <p>
              <b>Overview:</b> {moviePage.overview}
            </p>
            <p>
              <b>Genres:</b>{" "}
              {moviePage?.genres?.map((genre) => genre.name + ", ")}{" "}
            </p>
            <p>
              <b>Language:</b> {moviePage.original_language}
            </p>
            <p>
              <b>Movie Page:</b>{" "}
              <a
                href={moviePage.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                {moviePage.homepage}
              </a>
            </p>
            <p>
              <b>Production companies:</b>{" "}
              {moviePage?.production_companies?.map(
                (company) => company.name + ", "
              )}
            </p>
            <p>
              <b>Length:</b> {moviePage.runtime} min
            </p>
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
          </MovieInfo>
        </MovieDetail>
      </MovieSite>
    </>
  );
};

export default MoviePage;
