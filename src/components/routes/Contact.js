// style imports
import "./style.min.css";

// util component imports
import { Card2 } from "../utils/cards";
import { Route1 } from "../utils/routes";

// image imports
import avatar from "../../media/layout/avatar.png";
import titleLogo from "../../media/layout/title-logo.png";

const Contact = () => {
  const content = (
    <div className="route-content">
      <div className="contact-card">
        <div className="contact-card-info">
          <Card2
            logo="fas fa-phone-square"
            name="Phone"
            destination="tel:+447742148280"
            data="0774-214-8280"
          />
          <Card2
            logo="fas fa-at"
            name="Email"
            destination="mailto:dougiehawes@hotmail.com"
            data="dougiehawes@hotmail.com"
          />
          <Card2
            logo="fas fa-envelope-square"
            name="Post"
            data="26a Riverside Mill, Godmanchester, PE292EP"
          />
          <Card2
            logo="fab fa-github-square"
            name="GitHub"
            destination="https://github.com/DougieHawes"
            data="DougieHawes"
          />
          <Card2
            logo="fab fa-linkedin"
            name="LinkedIn"
            destination="https://www.linkedin.com/in/dougiehawes/"
            data="dougiehawes"
          />
          <Card2
            logo="fab fa-youtube"
            name="YouTube"
            destination="https://www.youtube.com/channel/UCg6zwHai7Lig5CGcWkWfqTA"
            data="Dougie_Hawes"
          />
        </div>
        <img className="contact-card-photo" src={avatar} alt="" />
        <img className="contact-card-logo" src={titleLogo} alt="" />
      </div>
    </div>
  );

  return <Route1 path="contact" content={content} />;
};

export default Contact;
