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

export const Card2 = ({ logo, name, destination, data }) => (
  <a href={destination} target="blank">
    <div className="card2">
      <i className={`${logo} card2-info-logo`}></i>
      <div className="card2-info-key">{name}</div>
      <div className="card2-info-data">{data}</div>
    </div>
  </a>
);

export const Card3 = ({ onClick, onMouseEnter, onMouseLeave, image, name }) => (
  <div
    className="card3"
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <img className="skill-logo" src={image} alt="" />
    <h3 className="skill-name">{name}</h3>
  </div>
);
