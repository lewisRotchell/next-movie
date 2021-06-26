import React from "react";
import classes from "./MainHeader.module.scss";
import SearchMovie from "../input/SearchMovie";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h1>Next Movie</h1>
      <SearchMovie />
    </header>
  );
};

export default MainHeader;
