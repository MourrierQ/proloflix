import React, { Component } from "react";
import Layout from "./layout/Layout";

import classes from "./index.css";

import NavBar from "./components/Nav/NavBar";
import SearchContainer from "./containers/SearchContainer";

class App extends Component {
  render() {
    return (
      <Layout>
        <NavBar />
        <div className={classes.Container}>
          <SearchContainer />
        </div>
      </Layout>
    );
  }
}

export default App;
