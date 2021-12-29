import React from "react";
import Navbar from "./components/Navbar/Navbar";
import classes from "./App.module.css";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";

function App() {
  return <div className={classes.main}>
    <Navbar/>
    <Home/>
    <Project/>
    <Contact/>
  </div>;
}

export default App;
