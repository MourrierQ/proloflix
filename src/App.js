import React, { Component } from "react";
import Layout from "./layout/Layout";

import classes from "./index.css";

import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./components/Nav/NavBar";
import SearchContainer from "./containers/SearchContainer";

import MovieDetail from "./components/MovieDetail";

class App extends Component {
  render() {
    return (
      <Layout>
        <NavBar />
        <div className={classes.Container}>
          <BrowserRouter>
            <div>
              <Route exact path="/movie/:id" component={MovieDetail} />
              <Route exact path="/" component={SearchContainer} />
            </div>
          </BrowserRouter>
        </div>
      </Layout>
    );
  }
}

export default App;
