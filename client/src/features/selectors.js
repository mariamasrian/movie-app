import { createSelector } from "reselect";

const moviesSelector = (state) => state.movies;

export const selectMoviesData = createSelector(
  moviesSelector,
  (movies) => movies.state
);

export const selectSelectedMovie = createSelector(
  moviesSelector,
  (movies) => movies.selectedMovie
);
