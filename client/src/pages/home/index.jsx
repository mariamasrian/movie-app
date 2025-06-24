import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieActions, movieSelectors } from "../../features/config";
import { Header } from "../../components/header";
import { TrendingMovies } from "../../components/trendingMovies";
import { Notes } from "../../components/notes";
import { Sidebar } from "../../components/sidebar";
import { useDebouncedCallback } from "../../hooks/debounce";
import style from "./style.module.scss";

const Home = () => {
  const [userNotes, setUserNotes] = useState([]);
  const dispatch = useDispatch();

  const trendingMovies = useSelector(movieSelectors.selectMoviesData);
  const selectedMovie = useSelector(movieSelectors.selectSelectedMovie);

  useEffect(() => {
    dispatch(movieActions.fetchMovies());
  }, []);

  const handleSearchMovies = useCallback((query) => {
    dispatch(movieActions.searchMovies(query));
  }, []);

  const [value, handleSearchChange] = useDebouncedCallback(handleSearchMovies);

  useEffect(() => {
    if (trendingMovies.length > 0 && selectedMovie === null) {
      dispatch(movieActions.setSelectedMovie(trendingMovies[0]));
    }
  }, [trendingMovies, selectedMovie, dispatch]);

  const handleMovieSelect = useCallback(
    (movie) => {
      dispatch(movieActions.setSelectedMovie(movie));
    },
    [dispatch]
  );

  return (
    <div className={style.container}>
      <div className={style.content}>
        <main className={style.main}>
          <Header searchTerm={value} onSearchChange={handleSearchChange} />
          <TrendingMovies
            movies={trendingMovies}
            onMovieSelect={handleMovieSelect}
          />
          <Notes setUserNotes={setUserNotes} />
        </main>

        <Sidebar selectedMovie={selectedMovie} userNotes={userNotes} />
      </div>
    </div>
  );
};

export default Home;
