import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "./logo192.png";
import { ShowContext } from "./Contexts/ShowContext";

const ShowDetails = (props) => {
  const { state, actions } = useContext(ShowContext);
  useEffect(() => {
    if (!props.match.params.id) {
      return actions.setError(new Error("Not found"));
    }
    return getShow(props.match.params.id);
    async function getShow(showId) {
      const url = `https://api.tvmaze.com/shows/${showId}`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.length === 0) {
          return actions.setError(new Error("Not found"));
        }
        fetchSuccessful(data);
      } catch (error) {
        actions.setError(true);
      } finally {
        actions.setIsLoading(false);
      }
    }
    function fetchSuccessful(data) {
      const showInfo = {
        id: data.id,
        name: data.name,
        image: data.image,
        genres: data.genres,
        language: data.language,
        schedule: data.schedule,
        network: data.network,
        runtime: data.runtime,
        summary: data.summary,
        status: data.status,
        url: data.url,
      };
      actions.setShow(showInfo);
    }
  }, [props.match.params.id, actions]);

  return (
    <div>
      {state.isLoading && <p>Loading..</p>}
      {state.error && <p>{state.error.message}</p>}
      {!actions.isLoading && !actions.error && state.show && (
        <div className="wrapper">
          {/* Image */}
          <figure className="details">
            {state.show && state.show.image && state.show.url !== null ? (
              <a href={state.show.url}>
                <img
                  src={state.show.image.original}
                  alt={state.show.name}
                ></img>
              </a>
            ) : (
              <a href={state.show.url}>
                <img src={logo} alt={state.show.name}></img>
              </a>
            )}
          </figure>

          {/* Description */}
          <div className="main-description">
            <div>
              <h1>{state.show.name}</h1>
            </div>
            <div className="description">
              <p>{state.show.summary.slice(3, -4)}</p>
              <p>Status: {state.show.status}</p>
              <span>Share this on:</span>{" "}
              <a href={state.show.url} className="fa fa-facebook">
                {" "}
              </a>{" "}
              <a href={state.show.url} class="fa fa-twitter">
                {" "}
              </a>{" "}
              <a href={state.show.url} class="fa fa-google">
                {" "}
              </a>{" "}
              <a href={state.show.url} class="fa fa-linkedin">
                {" "}
              </a>{" "}
              <a href={state.show.url} class="fa fa-youtube">
                {" "}
              </a>{" "}
              <a href={state.show.url} class="fa fa-instagram">
                {" "}
              </a>
            </div>
          </div>
          {/* Details */}
          <div className="genres">
            <ul className="ingredients">
              {state.show && state.show.genres !== null ? (
                <dl>
                  <span>Genres:{state.show.genres[0]}</span>
                </dl>
              ) : (
                <dl>
                  <span>
                    Genres: <strong>Comedy</strong>
                  </span>
                </dl>
              )}
              <dl>
                <span>
                  Language: <strong>{state.show.language}</strong>
                </span>
              </dl>
              {state.show &&
              state.show.schedule.days.length !== 0 &&
              state.show.schedule.time.length !== 0 ? (
                <dl>
                  <span>
                    Every {state.show.schedule.days[0]} at{" "}
                    {state.show.schedule.time}
                  </span>
                </dl>
              ) : (
                <dl>
                  <span>Every Thursday at 21:00</span>
                </dl>
              )}
              {state.show && state.show.runtime !== null ? (
                <dl>
                  <span>
                    Duration: <strong>{state.show.runtime} min.</strong>
                  </span>
                </dl>
              ) : (
                <dl>
                  <span>Duration: 45 min.</span>
                </dl>
              )}
            </ul>
            {state.show && state.show.network !== null ? (
              <p className="variation">
                You can watch {state.show.name} at channel{" "}
                {state.show.network.name}.
              </p>
            ) : (
              <p className="variation">
                You can watch {state.show.name} at channel CBS.
              </p>
            )}
          </div>
        </div>
      )}
      {!state.isLoading && !state.error && (
        <Link className="back" to="/">
          Turn Home Page
        </Link>
      )}
    </div>
  );
};
export default ShowDetails;
