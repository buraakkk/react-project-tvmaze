import React from "react";

function ShowItem({ image, name, chapter }) {
  return (
    <div className="showItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {chapter} </p>
    </div>
  );
}

export default ShowItem;
