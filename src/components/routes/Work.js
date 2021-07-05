// dependency imports
import { useState } from "react";

// style imports
import "./style.min.css";

// util component imports
import { Route1 } from "../utils/routes";

const Work = () => {
  const [state, setState] = useState({
    showApps: true,
    showSites: true,
    showGames: true,
    showEffects: true,
  });

  const { showApps, showSites, showGames, showEffects } = state;

  const appsClick = () => {
    if (showApps) {
      if (showSites && showGames && showEffects) {
        setState({
          showApps: true,
          showSites: false,
          showGames: false,
          showEffects: false,
        });
      } else {
        setState({
          ...state,
          showApps: false,
        });
      }
    } else {
      setState({
        ...state,
        showApps: true,
      });
    }
  };

  const sitesClick = () => {
    if (showSites) {
      if (showApps && showGames && showEffects) {
        setState({
          showApps: false,
          showSites: true,
          showGames: false,
          showEffects: false,
        });
      } else {
        setState({
          ...state,
          showSites: false,
        });
      }
    } else {
      setState({
        ...state,
        showSites: true,
      });
    }
  };

  const gamesClick = () => {
    if (showGames) {
      if (showApps && showSites && showEffects) {
        setState({
          showApps: false,
          showSites: false,
          showGames: true,
          showEffects: false,
        });
      } else {
        setState({
          ...state,
          showGames: false,
        });
      }
    } else {
      setState({
        ...state,
        showGames: true,
      });
    }
  };

  const effectsClick = () => {
    if (showEffects) {
      if (showApps && showSites && showGames) {
        setState({
          showApps: false,
          showSites: false,
          showGames: false,
          showEffects: true,
        });
      } else {
        setState({
          ...state,
          showEffects: false,
        });
      }
    } else {
      setState({
        ...state,
        showEffects: true,
      });
    }
  };

  const content = (
    <div className="route-content">
      <nav className="work-nav">
        <p className="work-nav-description">
          filter my work by clicking the options below
        </p>
        <div className="work-nav-list">
          <div
            className={`work-nav-item ${showApps && "work-nav-item-selected"}`}
            onClick={appsClick}
          >
            apps
          </div>
          <div
            className={`work-nav-item ${showSites && "work-nav-item-selected"}`}
            onClick={sitesClick}
          >
            sites
          </div>
          <div
            className={`work-nav-item ${showGames && "work-nav-item-selected"}`}
            onClick={gamesClick}
          >
            games
          </div>
          <div
            className={`work-nav-item ${
              showEffects && "work-nav-item-selected"
            }`}
            onClick={effectsClick}
          >
            effects
          </div>
        </div>
      </nav>
    </div>
  );

  return <Route1 path="work" content={content} />;
};

export default Work;
