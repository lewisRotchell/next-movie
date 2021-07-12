import React, { useState } from "react";
import classes from "./SearchMovie.module.scss";
import { useRouter } from "next/router";

const SearchMovie = () => {
  const [text, setText] = useState("");
  const router = useRouter();

  const onInputHandler = (e) => {
    setText(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const fullPath = `/search/${text}`;
    router.push(fullPath);
  };
  return (
    <form className={classes.searchMovie} onSubmit={onSubmitHandler}>
      <input
        onChange={onInputHandler}
        type="text"
        id="search"
        value={text}
        placeholder="Search..."
      />
    </form>
  );
};

export default SearchMovie;
