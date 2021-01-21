import React from "react";

function CuisineInfo({ cuisine }) {
  return (
    <div className="cuisine-data">
      <h1>{cuisine.Title}</h1>
      <h4>Year: {cuisine.Year}</h4>
    </div>
  );
}

export default CuisineInfo;
