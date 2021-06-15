import React, { useContext } from "react";
import Logo from "../assets/tvm-header-logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { ShowContext } from "../Contexts/ShowContext";

function Navbar() {
const { state, actions } = useContext(ShowContext);
  const toggleNavbar = () => {
    actions.setOpenLinks(!state.openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={state.openLinks ? "open" : "close"}>
        <Link to="/">
          <img src={Logo} alt="Name"></img>
        </Link>
        <div className="hiddenLinks">
          <Link to="/"> Search </Link>
          <Link to="/shows"> Shows </Link>
          <Link to="/people"> People </Link>
          <Link to="/networks"> Networks </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/login"> Login </Link>
          <Link to="/register"> Register </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Search </Link>
        <Link to="/shows"> Shows </Link>
        <Link to="/people"> People </Link>
        <Link to="/networks"> Networks </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/login"> Login </Link>
        <Link to="/register"> Register </Link>
        <button onClick={toggleNavbar}>
          {/* <ReorderIcon /> */}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
