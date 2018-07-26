import React from "react";
<<<<<<< HEAD
import "./Jumbotron.css";

const Jumbotron = ({ children }) => (
  <div className="jumbotron mt-2">
=======

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    className="jumbotron"
  >
>>>>>>> 333358986ea8556c0d8cfe36a74d426f95efe22f
    {children}
  </div>
);

export default Jumbotron;
