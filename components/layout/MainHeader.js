import React from "react";
import classes from "./MainHeader.module.scss";
import SearchMovie from "../input/SearchMovie";
import Link from "next/link";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <h1>Next Movie</h1>
      </Link>
      <SearchMovie />
    </header>
  );
};

export default MainHeader;
