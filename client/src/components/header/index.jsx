import React from "react";
import style from "./style.module.scss";

export const Header = ({ searchTerm, onSearchChange }) => {
  return (
    <header className={style.header}>
      <h1 className={style.title}>Movie Explorer</h1>
      <input
        className={style.searchInput}
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={onSearchChange}
      />
    </header>
  );
};
