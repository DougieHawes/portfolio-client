// dependency imports
import { Fade, Slide } from "react-reveal";

// style imports
import "./style.min.css";

export const Route1 = ({ path, content }) => (
  <div className={`route ${path}`}>
    <Slide left>
      <h2 className="route-title">{path}</h2>
    </Slide>
    <Fade delay={700} up>
      <div className="route-body">{content}</div>
    </Fade>
  </div>
);
