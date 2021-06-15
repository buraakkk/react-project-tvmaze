import React, { useContext } from "react";
import TVShow from "./TVShow";
import Search from "./Search";
import { ShowContext } from "./Contexts/ShowContext";


const Show = () => {
  const { state, actions } = useContext(ShowContext);

  return (
    <div>
      <div className="allShows">
        <div className="header">
          <div className="logo">
            <a href="https://www.tvmaze.com">
              <i className="fab fa-github"></i>{" "}
            </a>
          </div>
          <h1>TV Shows</h1>
        </div>
        <Search
          fetchShow={actions.fetchShow}
          searchInput={state.searchInput}
          setSearchInput={actions.setSearchInput}
        />
        {state.isLoading && <p>Loading...</p>}
        {state.error && <p>{state.error.message}</p>}
        {!state.isLoading &&
          !state.error &&
          state.shows &&
          state.shows.length === 0 && <p>Search a show</p>}
      </div>{" "}
      <div>
        {" "}
        
        <div className="Shows">
          {state.shows.length > 0 && <TVShow key={state.shows.id} />}{" "}
        </div>{" "}
      </div>
    </div>
  );
};
export default Show;
