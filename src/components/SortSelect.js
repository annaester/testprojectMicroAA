import React, { useState, useEffect } from "react";

const SortSelect = ({ movies }) => {
  const [data, setData] = useState([]);
  const [sortMovies, setSortMovies] = useState([]);

  useEffect(() => {
    const sortedMovies = (type) => {
      const types = {
        rating: "imdb_rating",
        release: "release_date",
        alphabetically: "alphabetically",
      };
      const sortProperty = types[type];
      const sorted = [...movies].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      setData(sorted);
    };

    sortedMovies(sortMovies);
  }, [sortMovies]);

  return (
    <>
      <button>Sort movies</button>
      <select onChange={(e) => setSortMovies(e.target.value)}>
        <option value="rating">imdb rating</option>
        <option valur="release">release date</option>
        <option valur="alphabetically">alpabetically</option>
      </select>
    </>
  );
};

export default SortSelect;
