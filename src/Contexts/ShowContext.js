import React, { useState, createContext } from "react";

export const ShowContext = createContext();

export const ShowProvider = (props) => {
  const [shows, setState] = useState([]);
  const [show, setShow] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  const setShows = (newShows) => {
    setState(newShows);
  };
  const resetShows = () => {
    setState([]);
  };
  const handleKeypress = (e) => {
    if (e.charCode === 13) {
      fetchShow();
    }
  };
  const fetchShow = async () => {
    const url = `https://api.tvmaze.com/search/shows?q=${searchInput}`;
    if (searchInput === "") {
      resetShows();
      return setError(new Error("Search value cannot be empty"));
    }
    (async () => {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch(url);
        const data = await res.json();
        if (data.length === 0) {
          resetShows();
          return setError(new Error("Not found"));
        }
        setShows(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  };
  const context = {
    state: { show, shows, searchInput, isLoading, error, openLinks },
    actions: {
      setShow,
      setShows,
      resetShows,
      setSearchInput,
      setIsLoading,
      setError,
      fetchShow,
      handleKeypress,
      setOpenLinks,
      toggleNavbar,
    },
  };

  return (
    <ShowContext.Provider value={context}>
      {props.children}
    </ShowContext.Provider>
  );
};
