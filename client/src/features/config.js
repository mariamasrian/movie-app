import * as selectors from "./selectors";
import { fetchMovies, searchMovies } from "./actions";
import { setSelectedMovie } from "./movieSlice";

export const movieActions = {
  fetchMovies,
  searchMovies,
  setSelectedMovie,
};

export const movieSelectors = {
  ...selectors,
};
