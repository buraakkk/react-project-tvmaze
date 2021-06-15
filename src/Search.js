import React, { useContext } from "react";
import { ShowContext } from "./Contexts/ShowContext";
const Search = () => {
  const { state, actions } = useContext(ShowContext);
  

  return (
    <div class="search-bar">
      <input
        type="text"
        required
        value={state.searchInput}
        onChange={(event) => actions.setSearchInput(event.target.value)}
        onKeyPress={actions.handleKeypress}
      />
      <button
        class="search-btn"
        type="submit"
        onClick={actions.fetchShow}
      ></button>
    </div>
  );
};
export default Search;
