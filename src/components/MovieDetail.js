import React from "react";

const MovieDetail = props => {
  console.log(props);
  const data = props.infos.data;
  return (
    <div>
      <h1>{data.Title}</h1>
      <img src={data.Poster} alt="" />
      <h3>{data.Released}</h3>
    </div>
  );
};

export default MovieDetail;
