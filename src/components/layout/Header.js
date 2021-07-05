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
  return (
    <div className="header">
      <div className="header-stack-box">
        <img className="header-stack-logo" src={mongoLogo} alt="" />
        <p className="header-stack-letter">M</p>
      </div>
      <div className="header-stack-box">
        <img className="header-stack-logo" src={expressLogo} alt="" />
        <p className="header-stack-letter">E</p>
      </div>
      <div className="header-link-box">
        <Link1
          site="https://github.com/DougieHawes"
          logo="fab fa-github-square"
        />
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
      </div>
      <div className="header-stack-box">
        <img className="header-stack-logo" src={reactLogo} alt="" />
        <p className="header-stack-letter">R</p>
      </div>
      <div className="header-stack-box">
        <img className="header-stack-logo" src={nodeLogo} alt="" />
        <p className="header-stack-letter">N</p>
      </div>
    </div>
  );
};

export default Header;
