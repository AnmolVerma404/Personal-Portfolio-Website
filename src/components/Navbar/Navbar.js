import React from "react";
import classes from "./Navbar.module.css";
const navbar = () => {
  return <div className={classes.navDiv}>
      <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#contact">Contact</a></li>
      </ul>
  </div>;
};

export default navbar;
