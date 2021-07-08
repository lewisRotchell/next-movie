import React from "react";
import classes from "./Footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <p>Created by Lewis Rotchell</p>
      <p>Copyright {year}. All Rights Reserved.</p>
      <p>
        This product uses the TMDb API but is not endorsed or certified by TMDb.
      </p>
    </footer>
  );
};

export default Footer;
