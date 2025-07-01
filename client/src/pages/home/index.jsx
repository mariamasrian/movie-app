import React, { useState, useEffect, useCallback } from "react";
import { Header } from "../../components/header";
import { TrendingMovies } from "../../components/trendingMovies";
import { Notes } from "../../components/notes";
import { Sidebar } from "../../components/sidebar";
import { useDebouncedCallback } from "../../hooks/debounce";
import style from "./style.module.scss";
import { useMovies } from "../../hooks/useMovies";

const Home = () => {
  const [userNotes, setUserNotes] = useState([]);
  const { trendingMovies, selectedMovie, fetchMovies, searchMovies, selectMovie } = useMovies();
  const [value, handleSearchChange] = useDebouncedCallback(searchMovies);

  useEffect(() => { fetchMovies(); }, [fetchMovies]);

  useEffect(() => {
    if (trendingMovies.length && !selectedMovie) {
      selectMovie(trendingMovies[0]);
    }
  }, [trendingMovies, selectedMovie, selectMovie]);

  return (
    <div className={style.container}>
      <div className={style.content}>
        <main className={style.main}>
          <Header searchTerm={value} onSearchChange={handleSearchChange} />
          <TrendingMovies movies={trendingMovies} onMovieSelect={selectMovie} />
          <Notes setUserNotes={setUserNotes} />
        </main>
        <Sidebar selectedMovie={selectedMovie} userNotes={userNotes} />
      </div>
    </div>
  );
};

export default Home;
