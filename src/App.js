import React, { useState, useEffect } from "react";
import FirstPage from "components/FirstPage";
import MoviePage from "components/MoviePage";
import { API_URL_POPULAR } from "utils/urls";

export const App = () => {
  const [firstPage, setFirstPage] = useState([]);

  useEffect(() => {
    fetch(API_URL_POPULAR)
      .then((res) => res.json())
      .then((data) => setFirstPage(data.results));
  }, []);

  return (
    <div>
      Find me in src/app.js!
      <FirstPage movies={firstPage} />
      <MoviePage />
    </div>
  );
};
