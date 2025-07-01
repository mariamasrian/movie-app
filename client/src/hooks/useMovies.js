import { useSelector, useDispatch } from "react-redux";
import { movieActions, movieSelectors } from "../features/config";
import { useCallback } from "react";

export const useMovies = () => {
  const dispatch = useDispatch();
  const trendingMovies = useSelector(movieSelectors.selectMoviesData);
  const selectedMovie = useSelector(movieSelectors.selectSelectedMovie);

  const fetchMovies = useCallback(() => dispatch(movieActions.fetchMovies()), [dispatch]);
  const searchMovies = useCallback((query) => dispatch(movieActions.searchMovies(query)), [dispatch]);
  const selectMovie = useCallback((movie) => dispatch(movieActions.setSelectedMovie(movie)), [dispatch]);

  return { trendingMovies, selectedMovie, fetchMovies, searchMovies, selectMovie };
};
