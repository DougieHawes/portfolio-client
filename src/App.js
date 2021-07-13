// dependency imports
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Slide } from "react-reveal";

// style imports
import "./style.min.css";

// component imports
// layout
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
// route
import Landing from "./components/routes/Landing";
import Work from "./components/routes/Work";
import Skills from "./components/routes/Skills";
import Contact from "./components/routes/Contact";
import Blog from "./components/routes/Blog";
// private
import Signin from "./components/routes/private/Signin";
import Dashboard from "./components/routes/private/Dashboard";
import AddWork from "./components/routes/private/AddWork";
import AddBlog from "./components/routes/private/AddBlog";

// media imports
import video1 from "./media/background-video1.mp4";
import video2 from "./media/background-video2.mp4";

const App = () => {
  const [state, setState] = useState({
    mouseOut: true,
    scrolled: false,
    colourToggle: false,
  });

  const { mouseOut, scrolled, colourToggle } = state;

  useEffect(() => {
    window.addEventListener("scroll", watchScroll);
  }, []);

  const watchScroll = () => {
    if (window.scrollY > 42) {
      setState({ ...state, scrolled: true });
    } else {
      setState({ ...state, scrolled: false });
    }
  };

  return (
    <div className="app" id="top">
      <video className="background-video" autoPlay loop>
        <source src={colourToggle ? video2 : video1} type="video/mp4" />
      </video>
      <Slide down>
        <div
          className={`fade-box ${mouseOut && scrolled && "box-faded"}`}
          onMouseEnter={() => setState({ ...state, mouseOut: false })}
          onMouseLeave={() => setState({ ...state, mouseOut: true })}
        >
          <Header />
          <Navbar />
        </div>
      </Slide>
      <div className="route-box">
        <Route exact path="/" component={Landing} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blog" component={Blog} />
        {/* private routes */}
        <Route exact path="/secret" component={Signin} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/add-work" component={AddWork} />
        <Route exact path="/add-blog" component={AddBlog} />
      </div>
      <div
        className="toggle-box"
        onClick={() => setState({ ...state, colourToggle: true })}
      >
        colour-toggle
      </div>
    </div>
  );
};

export default App;
