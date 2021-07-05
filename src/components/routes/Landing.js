// dependency imports
import { Fade } from "react-reveal";

// style imports
import "./style.min.css";

// image imports
import logo from "../../media/layout/landing-logo.png";

const Landing = () => {
  return (
    <div className="route landing">
      <Fade duration={4200}>
        <img className="landing-logo" src={logo} alt="" />
      </Fade>
    </div>
  );
};

export default Landing;
