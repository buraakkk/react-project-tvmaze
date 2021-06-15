import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/logo192.png";
import { ShowContext } from "./Contexts/ShowContext";

const TVShow = () => {
  const { state, actions } = useContext(ShowContext);
  return (
    <>
      {state.shows.map((item) => (
        <div>
          <button onClick={() => actions.resetShows()}>X</button>
          <div className="Show">
            <Link className="Link" to={`/${item.show.id}`}>
              <h2>{item.show.name}</h2>
            </Link>
            <div className="schedule">
              {item &&
              item.show.schedule.days.length !== 0 &&
              item.show.schedule.time.length !== 0 ? (
                <h4>
                  Every {item.show.schedule.days[0]} at{" "}
                  {item.show.schedule.time}
                </h4>
              ) : (
                <h4>Every Thursday at 21:00</h4>
              )}
            </div>
            <div className="image">
              {" "}
              {item && item.show.image !== null ? (
                <img src={item.show.image.medium} alt={item.show.name}></img>
              ) : (
                <img src={Logo} alt={item.show.name}></img>
              )}
            </div>
            <div>
              <a href={item.show.url}>
                <h4 className="watch">Watch Now</h4>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TVShow;
