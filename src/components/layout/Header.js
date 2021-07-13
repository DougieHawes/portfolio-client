// dependency imports
import { useState } from "react";

// dependency imports
import { Link } from "react-router-dom";

// style imports
import "./style.min.css";

// util imports
import { Link1 } from "../utils/links";

// media imports
import mongoLogo from "../../media/layout/mongo-header-logo.svg";
import expressLogo from "../../media/layout/express-header-logo.svg";
import reactLogo from "../../media/layout/react-header-logo.svg";
import nodeLogo from "../../media/layout/node-header-logo.svg";

const Header = () => {
  const [state, setState] = useState({
    showMongo: false,
    showExpress: false,
    showReact: false,
    showNode: false,
  });

  const { showMongo, showExpress, showReact, showNode } = state;

  return (
    <div className="header">
      <div className="header-stack-box">
        <div
          onMouseEnter={() =>
            setState({
              showExpress: false,
              showReact: false,
              showNode: false,
              showMongo: true,
            })
          }
          onMouseLeave={() => setState({ ...state, showMongo: false })}
        >
          <img className="header-stack-logo" src={mongoLogo} alt="" />
          <p className="header-stack-letter">M</p>
        </div>
        <div
          className={`header-stack-info ${
            showMongo && "header-stack-info-active"
          }`}
          onMouseEnter={() => setState({ ...state, showMongo: true })}
          onMouseLeave={() => setState({ ...state, showMongo: false })}
        >
          <span>MongoDB</span> a source-available cross-platform
          document-oriented database program using a NoSQL JSON-like database.
        </div>
      </div>
      <div className="header-stack-box">
        <div
          onMouseEnter={() =>
            setState({
              showMongo: false,
              showReact: false,
              showNode: false,
              showExpress: true,
            })
          }
          onMouseLeave={() => setState({ ...state, showExpress: false })}
        >
          <img className="header-stack-logo" src={expressLogo} alt="" />
          <p className="header-stack-letter">E</p>
        </div>
        <div
          className={`header-stack-info ${
            showExpress && "header-stack-info-active"
          }`}
          onMouseEnter={() => setState({ ...state, showExpress: true })}
          onMouseLeave={() => setState({ ...state, showExpress: false })}
        >
          <span>Express.js</span> a back end web application framework for
          Node.js designed for building web applications and APIs.
        </div>
      </div>
      <div className="header-link-box">
        <Link1
          site="https://github.com/DougieHawes"
          logo="fab fa-github-square"
        />
        <span class="header-link-text">visit my GitHub</span>
      </div>
      <div className="header-name-box">
        <Link to="/">
          <h1 className="header-name">Dougie Hawes</h1>
          <p className="header-title">FullStack Web Developer</p>
        </Link>
      </div>
      <div className="header-link-box">
        <Link1
          site="https://www.linkedin.com/in/dougiehawes/"
          logo="fab fa-linkedin"
        />
        <span class="header-link-text">visit my LinkedIn</span>
      </div>
      <div className="header-stack-box">
        <div
          onMouseEnter={() =>
            setState({
              showMongo: false,
              showExpress: false,
              showNode: false,
              showReact: true,
            })
          }
          onMouseLeave={() => setState({ ...state, showReact: false })}
        >
          <img className="header-stack-logo" src={reactLogo} alt="" />
          <p className="header-stack-letter">R</p>
        </div>
        <div
          className={`header-stack-info header-stack-info-right ${
            showReact && "header-stack-info-active"
          }`}
          onMouseEnter={() => setState({ ...state, showReact: true })}
          onMouseLeave={() => setState({ ...state, showReact: false })}
        >
          <span>React.js</span> an open-source JavaScript library for building
          user interfaces or UI components, used as a base in the development of
          single-page applications.
        </div>
      </div>
      <div className="header-stack-box">
        <div
          onMouseEnter={() =>
            setState({
              showMongo: false,
              showExpress: false,
              showReact: false,
              showNode: true,
            })
          }
          onMouseLeave={() => setState({ ...state, showNode: false })}
        >
          <img className="header-stack-logo" src={nodeLogo} alt="" />
          <p className="header-stack-letter">N</p>
        </div>
        <div
          className={`header-stack-info header-stack-info-right ${
            showNode && "header-stack-info-active"
          }`}
          onMouseEnter={() => setState({ ...state, showNode: true })}
          onMouseLeave={() => setState({ ...state, showNode: false })}
        >
          <span>Node.js</span> an open-source, cross-platform, back-end
          JavaScript runtime environment that executes JavaScript code outside a
          web browser.
        </div>
      </div>
    </div>
  );
};

export default Header;
