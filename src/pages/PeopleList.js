import React from "react";
import { listOfPeople } from "../helpers/listOfPeople";
import PeopleItem from "../Components/ShowsItem";
import "../styles/People.css";

function Menu() {
  return (
    <div className="people">
      <h1 className="peopleTitle">People</h1>
      <div className="peopleList">
        {listOfPeople.map((menuItem, key) => {
          return (
            <PeopleItem key={key} image={menuItem.image} name={menuItem.name} />
          );
        })}
      </div>{" "}
      <button className="back">Learn more...</button>
    </div>
  );
}

export default Menu;
