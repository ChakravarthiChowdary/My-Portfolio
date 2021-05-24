import "./App.css";
import { Sidebar, Projects, Skills } from "./Components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Components/About";
import Brightness4Icon from "@material-ui/icons/Brightness4";

export const toggleDarkMode = () => {
  document.getElementsByClassName("app")[0].classList.toggle("dark");
  document.getElementsByClassName("app_content")[0].classList.toggle("dark");
  document.getElementsByClassName("sidebar")[0].classList.toggle("dark");
  document.getElementsByClassName("app__darkSwitch")[0].classList.toggle("on");
  document
    .getElementsByClassName("sidebar__darkSwitch")[0]
    .classList.toggle("on");
};

function App() {
  return (
    <div className="app">
      <div className="app__circle1"></div>
      <div className="app__circle2"></div>
      <div className="app__circle3"></div>
      <div className="app_content">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/" exact>
              <About />
            </Route>
            <Route path="/projects" exact>
              <Projects />
            </Route>
            <Route path="/skills" exact>
              <Skills />
            </Route>
          </Switch>
        </Router>
      </div>
      <div className="app__darkSwitch" onClick={toggleDarkMode}>
        <Brightness4Icon></Brightness4Icon>
      </div>
    </div>
  );
}

export default App;
