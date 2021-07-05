import "./style.min.css";

export const Link1 = ({ site, logo }) => (
  <a className="header-link" href={`${site}`} target="blank">
    <i className={`${logo}`}></i>
  </a>
);
