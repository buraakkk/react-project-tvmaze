import React from "react";
import { showData } from "../helpers/showData";
import ShowItem from "../Components/ShowsItem";
import "../styles/Show.css";

function Show(props) {
  return (
    <div className="show">
      <h1 className="showTitle">Shows</h1>
      <h3>Popular shows airing tonight</h3>
      <div className="showList">
        {showData.map((menuItem, key) => {
          return (
            <ShowItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              chapter={menuItem.chapter}
            />
          );
        })}
      </div>
      <button className="back">
        Learn more...
      </button>
    </div>
  );
}

export default Show;
