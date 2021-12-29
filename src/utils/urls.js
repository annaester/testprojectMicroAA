export const API_KEY = "5c4188456a9b734458844d02dc8962a9";
export const API_URL_POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
export const API_MOVIE_DETAIL = (id) =>
  `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
export const API_MOVIE_TRAILER = (id) =>
  `http://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&append_to_response=videos`;
export const API_URL = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`;
export const SEARCH_URL = (handleSearchInput) =>
  `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${handleSearchInput}`;
