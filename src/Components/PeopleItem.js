import React from "react";

function PeopleItem({ image, name }) {
  return (
    <div className="peopleItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
    </div>
  );
}

export default PeopleItem;
