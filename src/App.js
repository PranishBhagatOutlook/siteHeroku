import "./App.css";
import About from "./Components/About";
import Project from "./Components/Project";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Connect from "./Components/Connect";
import Music from "./Components/Music";
import NotFound from "./Components/NotFound";
import Calculator from "./Components/Calculator/Calculator.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Photos from "./Components/Photos";
import Metronome from "./Components/Metronome/Metronome";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <Switch>
          s<Route exact path="/" component={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/projects" component={Project}></Route>
          <Route path="/blog" component={Blog}></Route>
          <Route path="/connect" component={Connect}></Route>
          <Route path="/music" component={Music}></Route>
          <Route path="/calculator" component={Calculator}></Route>
          <Route path="/photos" component={Photos}></Route>
          <Route path="/metronome" component={Metronome}></Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
