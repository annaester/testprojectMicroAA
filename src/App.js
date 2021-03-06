import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { API_URL_POPULAR } from "utils/urls";
import FirstPage from "components/FirstPage";
import MoviePage from "components/MoviePage";

export const App = () => {
  const [firstPage, setFirstPage] = useState([]);

  useEffect(() => {
    fetch(API_URL_POPULAR)
      .then((res) => res.json())
      .then((data) => setFirstPage(data.results));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage movies={firstPage} />} />
        <Route path="/moviepage/:id" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
};
