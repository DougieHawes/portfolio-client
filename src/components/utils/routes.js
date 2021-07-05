// dependency imports
import { Fade } from "react-reveal";

// style imports
import "./style.min.css";

export const Route1 = ({ path, content }) => (
  <Fade up>
    <div className={`route ${path}`}>
      <h2 className="route-title">{path}</h2>
      <div className="route-body">{content}</div>
    </div>
  </Fade>
);
