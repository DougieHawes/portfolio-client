// dependency imports
import { Zoom } from "react-reveal";

// style imports
import "./style.min.css";

export const Card1 = ({ image, title, siteLink, codeLink, description }) => (
  <Zoom>
    <div className="card card1">
      <div className="card1-hover-veneer"></div>
      <img className="card1-image" src={image} alt="" />
      <h3 className="card1-title card1-title-dark">{title}</h3>
      <div className="card1-hover-box">
        <div className="card1-links">
          <a className="card1-link" href={siteLink} target="blank">
            <i className="fas fa-sign-in-alt"></i> VIEW-SITE
          </a>
          <a className="card1-link" href={codeLink} target="blank">
            <i className="fas fa-code"></i> VIEW-CODE
          </a>
        </div>
        <p className="card1-description">{description}</p>
      </div>
      <h3 className="card1-title card1-title-light">{title}</h3>
    </div>
  </Zoom>
);