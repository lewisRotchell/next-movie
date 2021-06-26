import React, { useState } from "react";
import classes from "./SearchMovie.module.scss";

const SearchMovie = () => {
  const [text, setText] = useState("");

  const onInputHandler = (e) => {
    setText(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(text);
  };
  return (
    <form className={classes.searchMovie} onSubmit={onSubmitHandler}>
      <input onChange={onInputHandler} type="text" id="search" value={text} />
    </form>
  );
};

export default SearchMovie;
