import React from "react";
import classes from "./MovieListItem.css";

import { Link } from "react-router-dom";

const MovieListItem = props => {
  const data = props.infos;
  console.log(data);
  let img = data.Poster;
  if (img === "N/A") {
    img = "https://www.fillmurray.com/g/200/300";
  }
  const style = {
    backgroundImage: "url(" + img + ")"
  };
  return (
    <div className={classes.MovieListItem}>
      <div className={classes.Poster} style={style} />
      <h1 className={classes.Title}>{data.Title}</h1>
      <h2 className={classes.Released}>{data.Year}</h2>
      {/* <button className={classes.Btn}>Details</button> */}
      <Link className={classes.Btn} to={`/movie/${data.imdbID}`}>
        Details
      </Link>
    </div>
  );
};

export default MovieListItem;
