import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import classes from "./MovieDetail.css";

class MovieDetail extends Component {
  state = {
    movie: {
      Title: "test",
      Plot: "test",
      Released: "test"
    }
  };

  componentDidMount() {
    axios
      .get(
        `http://www.omdbapi.com/?apikey=95b09535&i=${
          this.props.match.params.id
        }`
      )
      .then(res => {
        console.log("AJAX");
        console.log(res);
        this.setState({ movie: res.data });
      });
  }

  render() {
    const data = this.state.movie;
    console.log("DATA");
    console.log(data);
    let img =
      data.Poster === "N/A"
        ? "https://www.fillmurray.com/g/200/300"
        : data.Poster;

    const style = {
      backgroundImage: "url(" + img + ")"
    };

    return (
      <div className={classes.MovieDetail}>
        <div className={classes.Header}>
          <h1>{data.Title}</h1>
          <h2>{data.Released}</h2>
          <Link className={classes.GoBackBtn} to="/">
            Go Back
          </Link>
        </div>
        <div className={classes.Poster} style={style} />
        <p className={classes.Plot}>{data.Plot}</p>
        <button className={classes.Btn}>Add To Cart</button>
      </div>
    );
  }
}

export default MovieDetail;
