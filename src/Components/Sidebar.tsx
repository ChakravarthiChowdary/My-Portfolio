import React, { useCallback } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Tooltip, IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { toggleDarkMode } from "../App";

export const Sidebar = () => {
  const viewResume = useCallback(() => {
    window.location.href = "/ChakravarthiResume.pdf";
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__user">
        <img
          className="sidebar__avatar"
          src="./MyPhoto.png"
          alt="profile pic"
        />
        <div className="sidebar__detail">
          <h2>Chakravarthi Katragadda</h2>
        </div>
      </div>
      <div className="sidebar__contact">
        <IconButton>
          <Tooltip title="chakravarthichowdary236@gmail.com">
            <EmailIcon />
          </Tooltip>
        </IconButton>
        <IconButton>
          <Tooltip title="+91 9441811236">
            <CallIcon aria-label="delete" />
          </Tooltip>
        </IconButton>
        <IconButton>
          <Tooltip title="Go to Chakravarthi's Github">
            <a href="https://github.com/ChakravarthiChowdary">
              <GitHubIcon />
            </a>
          </Tooltip>
        </IconButton>
        <IconButton>
          <Tooltip title="Go to Chakravarthi's LinkedIn Profile">
            <a href="https://www.linkedin.com/in/chakravarthichowdary/">
              <LinkedInIcon fontSize="large" />
            </a>
          </Tooltip>
        </IconButton>
      </div>
      <div className="sidebar__links">
        <div className="link__div">
          <Link to="/">
            <h3 className="link__text">About</h3>
          </Link>{" "}
        </div>
        <div className="link__div">
          <Link to="/skills">
            <h3 className="link__text">Skills</h3>
          </Link>{" "}
        </div>
        <div className="link__div">
          <Link to="/projects">
            <h3 className="link__text">Projects</h3>
          </Link>{" "}
        </div>
        <div className="link__div download__resume" onClick={viewResume}>
          <VisibilityIcon className="download__icon" />
          <Link to="/#">
            <h3 className="link__text">Resume</h3>
          </Link>
        </div>
      </div>
      <div className="sidebar__darkSwitch" onClick={toggleDarkMode}>
        <Brightness4Icon color="primary"></Brightness4Icon>
      </div>
    </div>
  );
};
