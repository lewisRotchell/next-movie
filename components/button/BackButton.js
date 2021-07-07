import React from "react";
import classes from "./BackButton.module.scss";
import { useRouter } from "next/router";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackButton = () => {
  const router = useRouter();
  return (
    <button className={classes.backButton} onClick={() => router.back()}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );
};

export default BackButton;
