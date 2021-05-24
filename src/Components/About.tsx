import "./About.css";
import React from "react";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import Fade from "react-reveal/Fade";

const institute = [
  {
    name: "VR Siddhartha Engineering College",
    location: "Vijayawada",
    designation: "B.Tech in Electrical and Electronics Engineering",
    year: 2014,
  },
  {
    name: "Sri Chaitanya Junior College",
    location: "Vijayawada",
    designation: "Maths, Physics, Chemistry",
    year: 2014,
  },
  {
    name: "Sri Chaitanya School",
    location: "Vijayawada",
    year: 2012,
  },
];

function About() {
  return (
    <div className="about__main">
      <div className="about__intro">
        <div className="intro__text">
          <Fade left>
            <h1 className="text__main">Hi, I Am Chakravarthi</h1>
            <h6 className="text__sub">A Passionate Web and Mobile developer</h6>
          </Fade>
        </div>
        <div className="intro__pic">
          <Fade right>
            {" "}
            <img src="./GrayPhoto.png" alt="greyDp" />
          </Fade>
        </div>
      </div>
      <div className="about__institutes">
        <div className="about__experience">
          <h1>
            <WorkIcon /> Experience
          </h1>
          <div className="experience__details">
            <h2>
              Tata Consultancy Services,
              <small>
                <i> Hyderabad</i>
              </small>
            </h2>
            <h3>System Engineer</h3>
            <i>Sep 2018 - till date</i>
          </div>
        </div>
        <div className="about__education">
          <h1>
            <SchoolIcon /> Education
          </h1>

          {institute.map((institute) => (
            <div key={institute.year} className="education__details">
              <h2>
                {institute.name},
                <small>
                  <i> {institute.location}</i>
                </small>
              </h2>
              <h3>{institute.designation}</h3>
              <i> {institute.year}</i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
