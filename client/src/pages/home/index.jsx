import React, { useEffect } from "react";
import { Header } from "../../components/header";
import { TrendingMovies } from "../../components/trendingMovies";
import { Notes } from "../../components/notes";
import { Sidebar } from "../../components/sidebar";
import { useDebouncedCallback } from "../../hooks/debounce";
import style from "./style.module.scss";
import { useMovies } from "../../hooks/useMovies";
import { useNoteCreator } from "../../hooks/useNoteCreator";

const Home = () => {
  const {
    trendingMovies,
    selectedMovie,
    fetchMovies,
    searchMovies,
    selectMovie,
  } = useMovies();
  const [value, handleSearchChange] = useDebouncedCallback(searchMovies);
  const noteProps = useNoteCreator();

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

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
          <Notes {...noteProps} />
        </main>
        <Sidebar selectedMovie={selectedMovie} userNotes={noteProps.notes} />
      </div>
    </div>
  );
};

export default Home;
