import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const Header = ({ back }) => {
  return (
    <div className="header">
      <Link to={back}>
        <IconButton>
          {back ? (
            <ArrowBackIosIcon fontSize="large" className="header__icon" />
          ) : (
            <PersonIcon fontSize="large" className="header__icon" />
          )}
        </IconButton>
      </Link>

      <img
        className="header__logo"
        src="https://www.pngkit.com/png/detail/73-730019_tinder-logo-transparent-tinder-logo-png.png"
        alt="logo"
      />

      <IconButton>
        <Link to="/chat">
          <ForumIcon fontSize="large" className="header__icon" />
        </Link>
      </IconButton>
    </div>
  );
};

export default Header;
