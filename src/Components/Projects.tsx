import React from "react";
import "./Projects.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import GitHubIcon from "@material-ui/icons/GitHub";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import uuid from "react-uuid";
const projects = [
  {
    name: "TODO MERN APP",
    imgURL1: "./projectScreens/TodoApp1.PNG",
    imgURL2: "./projectScreens/TodoApp2.PNG",
    hostURL: "https://todo-mern-app-3d21f.web.app/",
    gitHubURL: "https://github.com/ChakravarthiChowdary/TODO_MERN_APP",
  },
  {
    name: "Netflix-Clone",
    imgURL1: "./projectScreens/NetflixClone1.PNG",
    imgURL2: "./projectScreens/NetflixClone2.PNG",
    hostURL: "https://netflixclone-7be57.web.app/",
    gitHubURL: "https://github.com/ChakravarthiChowdary/Netflix-Clone",
  },
  {
    name: "College Mobile App",
    imgURL1: "./projectScreens/CollegeApp1.png",
    imgURL2: "./projectScreens/CollegeApp2.png",
    hostURL:
      "https://drive.google.com/file/d/1ZlGSzks7uWJq-YW3iBynDcEqwrT5hZxj/view",
    gitHubURL: "https://github.com/ChakravarthiChowdary/College-App",
  },
  {
    name: "Weather App",
    imgURL1: "./projectScreens/WeatherApp1.PNG",
    imgURL2: "./projectScreens/WeatherApp2.PNG",
    hostURL: "https://weatherapp-4b35f.web.app/",
    gitHubURL: "https://github.com/ChakravarthiChowdary/Weather-App",
  },
];

export const Projects = () => {
  return (
    <Fade>
      <div className="projects__main">
        <div className="header">
          <h1>PROJECTS</h1>
        </div>
        <div className="project__container">
          {projects.map((project) => (
            <Zoom top cascade key={uuid()}>
              <div className="project__detail">
                {/* pasted here */}
                <Carousel>
                  <img
                    className="project__image"
                    src={project.imgURL1}
                    alt={project.name}
                  />
                  <img
                    className="project__image"
                    src={project.imgURL2}
                    alt={project.name}
                  />
                </Carousel>
                {/* ended here */}
                <div className="project__options">
                  <div className="project__play">
                    <a href={project.hostURL}>
                      <PlayArrowIcon fontSize="large" />
                    </a>
                  </div>
                  <div className="project__github">
                    <a href={project.gitHubURL}>
                      <GitHubIcon fontSize="large" />
                    </a>
                  </div>
                </div>
              </div>
            </Zoom>
          ))}
        </div>
      </div>
    </Fade>
  );
};
