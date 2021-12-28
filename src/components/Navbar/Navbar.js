import React from "react";
import classes from "./Navbar.module.css";
const navbar = () => {
  return <div className={classes.navDiv}>
      <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Contect</li>
      </ul>
  </div>;
};

export default navbar;
