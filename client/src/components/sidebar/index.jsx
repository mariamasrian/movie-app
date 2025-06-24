import React from "react";
import { MovieDetails } from "../movieDetails";
import { UserNotes } from "../userNotes";
import style from "./style.module.scss";

export const Sidebar = ({ selectedMovie, userNotes }) => {
  return (
    <aside className={style.sidebar}>
      {selectedMovie && <MovieDetails movie={selectedMovie} />}
      <UserNotes notes={userNotes} />
    </aside>
  );
};
