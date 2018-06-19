import React, { Component } from "react";
import MovieListItem from "../components/MovieListItem/MovieListItem";
import MovieDetail from "../components/MovieDetail";
import axios from "axios";

import classes from "./SearchContainer.css";

export default class SearchContainer extends Component {
  state = {
    searchValue: "",
    MovieInfos: null
  };

  OnChangeHandler = e => {
    this.setState({ searchValue: e.target.value });
  };

  OnSearchHandler = e => {
    e.preventDefault();
    const movie = this.state.searchValue;
    if (movie !== "") {
      axios
        .get(`http://www.omdbapi.com/?apikey=95b09535&s=${movie}`)
        .then(res => {
          this.setState({ MovieInfos: res.data });
        });
    }
  };

  render() {
    let Result = <h4>No movie selected</h4>;
    if (this.state.MovieInfos !== null) {
      Result = this.state.MovieInfos.Search.map(element => {
        if (element.Type === "movie")
          return <MovieListItem infos={element} key={element.imdbID} />;
        return null;
      });
    }
    return (
      <div className={classes.SearchArea}>
        <h2>Order</h2>
        <h3>Please enter the name of the movie you want to order</h3>
        <form onSubmit={this.OnSearchHandler}>
          <input
            type="text"
            name="movie"
            value={this.state.searchValue}
            onChange={this.OnChangeHandler}
          />
          <input type="submit" value="Search" />
        </form>
        <div>{Result}</div>
      </div>
    );
  }
}
