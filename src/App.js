// dependency imports
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";

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

const App = () => {
  const [state, setState] = useState({
    mouseOut: true,
    scrolled: false,
  });

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
    <div className="app">
      <div
        className={`fade-box ${
          state.mouseOut && state.scrolled && "box-faded"
        }`}
        onMouseEnter={() => setState({ ...state, mouseOut: false })}
        onMouseLeave={() => setState({ ...state, mouseOut: true })}
      >
        <Header />
        <Navbar />
      </div>
      <div className="route-box">
        <Route exact path="/" component={Landing} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blog" component={Blog} />
      </div>
    </div>
  );
};

export default App;
