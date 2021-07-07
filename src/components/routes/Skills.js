// depency imports
import { useState } from "react";

// style imports
import "./style.min.css";

// util component imports
import { Card3 } from "../utils/cards";
import { Route1 } from "../utils/routes";

// media imports
import bootstrapLogo from "../../media/layout/bootstrap-logo.svg";
import cssLogo from "../../media/layout/css-logo.svg";
import expressLogo from "../../media/layout/express-logo.svg";
import htmlLogo from "../../media/layout/html-logo.svg";
import javascriptLogo from "../../media/layout/js-logo.svg";
import lessLogo from "../../media/layout/less-logo.svg";
import mongoLogo from "../../media/layout/mongo-logo.svg";
import nodeLogo from "../../media/layout/node-logo.svg";
import psqlLogo from "../../media/layout/psql-logo.svg";
import reactLogo from "../../media/layout/react-logo.svg";
import reduxLogo from "../../media/layout/redux-logo.svg";
import sassLogo from "../../media/layout/sass-logo.svg";

const Skills = () => {
  const [state, setState] = useState({
    showHTML: false,
    showCSS: false,
    showSass: false,
    showJavascript: false,
    showJquery: false,
    showMongo: false,
    showExpress: false,
    showReact: false,
    showNode: false,
    showRedux: false,
    showWebpack: false,
    showGit: false,
    showBootstrap: false,
    showMaterialize: false,
    showJest: false,
    showEnzyme: false,
    showLess: false,
    showPython: false,
    showJava: false,
    showCsharp: false,
    showPhp: false,
    showPsql: false,
  });

  const {
    showHTML,
    showCSS,
    showSass,
    showJavascript,
    showJquery,
    showMongo,
    showExpress,
    showReact,
    showNode,
    showRedux,
    showWebpack,
    showGit,
    showBootstrap,
    showMaterialize,
    showJest,
    showEnzyme,
    showLess,
    showPython,
    showJava,
    showCsharp,
    showPhp,
    showPsql,
  } = state;

  const content = (
    <div className="route-content">
      <div className="skills-table">
        <h3 className="skills-subtitle">Primary Skills</h3>
        <p className="skills-description">
          Where my greatest strengths are, and what could bee seen as the
          foundation of all my programming knowledge. As well as those essential
          for every developer.
        </p>
        <div className="skills-row">
          <Card3
            image={htmlLogo}
            name="HTML"
            onMouseEnter={() => setState({ ...state, showHTML: true })}
            onMouseLeave={() => setState({ ...state, showHTML: false })}
          />
        </div>
        <div
          className={`skill-description ${
            showHTML && "skill-description-active"
          }`}
        >
          <p className="skill-description-text">HTML</p>
        </div>
        <div className="skills-row">
          <Card3
            image={cssLogo}
            name="CSS"
            onMouseEnter={() => setState({ ...state, showCSS: true })}
            onMouseLeave={() => setState({ ...state, showCSS: false })}
          />
          <Card3
            image={sassLogo}
            name="Sass"
            onMouseEnter={() => setState({ ...state, showSass: true })}
            onMouseLeave={() => setState({ ...state, showSass: false })}
          />
        </div>
        <div
          className={`skill-description ${
            showCSS && "skill-description-active"
          }`}
        >
          <p className="skill-description-text">CSS</p>
        </div>
        <div
          className={`skill-description ${
            showSass && "skill-description-active"
          }`}
        >
          <p className="skill-description-text">SASS</p>
        </div>
        <div className="skills-row">
          <Card3
            image={javascriptLogo}
            name="JavaScript"
            onMouseEnter={() => setState({ ...state, showJavascript: true })}
            onMouseLeave={() => setState({ ...state, showJavascript: false })}
          />
          <Card3
            name="JQuery"
            onMouseEnter={() => setState({ ...state, showJquery: true })}
            onMouseLeave={() => setState({ ...state, showJquery: false })}
          />
        </div>
        <div
          className={`skill-description ${
            showJavascript && "skill-description-active"
          }`}
        >
          <p className="skill-description-text">JavaScript</p>
        </div>
        <div
          className={`skill-description ${
            showJquery && "skill-description-active"
          }`}
        >
          <p className="skill-description-text">jQuery</p>
        </div>
        <div className="skills-row">
          <Card3
            image={mongoLogo}
            name="MongoDB"
            onMouseEnter={() => setState({ ...state, showMongo: true })}
            onMouseLeave={() => setState({ ...state, showMongo: false })}
          />
          <Card3
            image={expressLogo}
            name="Express.js"
            onMouseEnter={() => setState({ ...state, showExpress: true })}
            onMouseLeave={() => setState({ ...state, showExpress: false })}
          />
          <Card3
            image={reactLogo}
            name="React.js"
            onMouseEnter={() => setState({ ...state, showReact: true })}
            onMouseLeave={() => setState({ ...state, showReact: false })}
          />
          <Card3
            image={nodeLogo}
            name="Node.js"
            onMouseEnter={() => setState({ ...state, showNode: true })}
            onMouseLeave={() => setState({ ...state, showNode: false })}
          />
        </div>
        <div
          className={`skill-description ${
            showMongo && "skill-description-active"
          }`}
        >
          <p className="skill-description-text">MongoDB</p>
        </div>
        <div
          className={`skill-description ${
            showExpress && "skill-description-active"
          }`}
        >
          <p className="skill-description-text">Express.js</p>
        </div>
        <div
          className={`skill-description ${
            showReact && "skill-description-active"
          }`}
        >
          <p className="skill-description-text">React.js</p>
        </div>
        <div
          className={`skill-description ${
            showNode && "skill-description-active"
          }`}
        >
          <p className="skill-description-text">Node.js</p>
        </div>
      </div>
      <div className="skills-table">
        <h3 className="skills-subtitle">Accessory Skills</h3>
        <p className="skills-description">
          The miscellany of other areas of expertise which are essential to
          professional development.
        </p>
        <div className="skills-row">
          <Card3
            image={reduxLogo}
            name="Redux"
            onMouseEnter={() => setState({ ...state, showRedux: true })}
            onMouseLeave={() => setState({ ...state, showRedux: false })}
          />
          <Card3
            name="Webpack"
            onMouseEnter={() => setState({ ...state, showWebpack: true })}
            onMouseLeave={() => setState({ ...state, showWebpack: false })}
          />
          <Card3
            name="Git"
            onMouseEnter={() => setState({ ...state, showGit: true })}
            onMouseLeave={() => setState({ ...state, showGit: false })}
          />
        </div>

        <div
          className={`skill-description ${
            showRedux && "skill-description-active"
          }`}
        >
          <p className="skill-description-text">Redux</p>
        </div>
        <div
          className={`skill-description ${
            showWebpack && "skill-description-active"
          }`}
        >
          <p className="skill-description-text">Webpack.js</p>
        </div>
        <div
          className={`skill-description ${
            showGit && "skill-description-active"
          }`}
        >
          <p className="skill-description-text">Git</p>
        </div>
        <div className="skills-row">
          <Card3
            image={bootstrapLogo}
            name="Bootstrap.css"
            onMouseEnter={() => setState({ ...state, showBootstrap: true })}
            onMouseLeave={() => setState({ ...state, showBootstrap: false })}
          />
          <Card3
            name="Materialize.css"
            onMouseEnter={() => setState({ ...state, showMaterialize: true })}
            onMouseLeave={() => setState({ ...state, showMaterialize: false })}
          />
        </div>
        <div
          className={`skill-description ${
            showBootstrap && "skill-description-active"
          }`}
        >
          <p className="skill-description-text">Bootstrap.css</p>
        </div>
        <div
          className={`skill-description ${
            showMaterialize && "skill-description-active"
          }`}
        >
          <p className="skill-description-text">Materialize.css</p>
        </div>
        <div className="skills-row">
          <Card3
            name="Jest"
            onMouseEnter={() => setState({ ...state, showJest: true })}
            onMouseLeave={() => setState({ ...state, showJest: false })}
          />
          <Card3
            name="Enzyme"
            onMouseEnter={() => setState({ ...state, showEnzyme: true })}
            onMouseLeave={() => setState({ ...state, showEnzyme: false })}
          />
        </div>
        <div
          className={`skill-description ${
            showJest && "skill-description-active"
          }`}
        >
          <p className="skill-description-text">Jest</p>
        </div>
        <div
          className={`skill-description ${
            showEnzyme && "skill-description-active"
          }`}
        >
          <p className="skill-description-text">Enzyme</p>
        </div>
      </div>
      <div className="skills-table">
        <h3 className="skills-subtitle">Supplementary Skills</h3>
        <p className="skills-description">
          Other packages I have learned, which could be used as alternatives to
          the primary skills listed above.
        </p>
        <div className="skills-row">
          <Card3
            image={lessLogo}
            name="Less"
            onMouseEnter={() => setState({ ...state, showLess: true })}
            onMouseLeave={() => setState({ ...state, showLess: false })}
          />
        </div>
        <div
          className={`skill-description ${
            showLess && "skill-description-active"
          }`}
        >
          <p className="skill-description-text">Less.css</p>
        </div>
        <div className="skills-row">
          <Card3
            name="Python"
            onMouseEnter={() => setState({ ...state, showPython: true })}
            onMouseLeave={() => setState({ ...state, showPython: false })}
          />
          <Card3
            name="Java"
            onMouseEnter={() => setState({ ...state, showJava: true })}
            onMouseLeave={() => setState({ ...state, showJava: false })}
          />
          <Card3
            name="C#"
            onMouseEnter={() => setState({ ...state, showCsharp: true })}
            onMouseLeave={() => setState({ ...state, showCsharp: false })}
          />
          <Card3
            name="Php"
            onMouseEnter={() => setState({ ...state, showPhp: true })}
            onMouseLeave={() => setState({ ...state, showPhp: false })}
          />
        </div>
        <div
          className={`skill-description ${
            showPython && "skill-description-active"
          }`}
        >
          <p className="skill-description-text">Python</p>
        </div>
        <div
          className={`skill-description ${
            showJava && "skill-description-active"
          }`}
        >
          <p className="skill-description-text">Java</p>
        </div>
        <div
          className={`skill-description ${
            showCsharp && "skill-description-active"
          }`}
        >
          <p className="skill-description-text">C#</p>
        </div>
        <div
          className={`skill-description ${
            showPhp && "skill-description-active"
          }`}
        >
          <p className="skill-description-text">Php</p>
        </div>
        <div className="skills-row">
          <Card3
            image={psqlLogo}
            name="PostgreSQL"
            onMouseEnter={() => setState({ ...state, showPsql: true })}
            onMouseLeave={() => setState({ ...state, showPsql: false })}
          />
        </div>
        <div
          className={`skill-description ${
            showPsql && "skill-description-active"
          }`}
        >
          <p className="skill-description-text">PostgreSQL</p>
        </div>
      </div>
    </div>
  );

  return <Route1 path="skills" content={content} />;
};

export default Skills;
