import React, { Component } from "react";
import classes from "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div className={classes.NavBar}>
        <div className={classes.Container}>
          <h1 className={classes.Logo}>
            Prolo<span>Flix</span>
          </h1>
          <div className={classes.LogoDeco} />
          <ul className={classes.NavMenu}>
            <li>
              <a href="">Register</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
