// dependency imports
import { useState } from "react";
import { Fade } from "react-reveal";

// style imports
import "./style.min.css";

export const Post1 = ({ title, date, text, imageDark = true }) => {
  const [state, setState] = useState({
    open: false,
  });

  const { open } = state;

  return (
    <div className="post1">
      <div className="post1-header">
        <h3
          className="post1-header-title"
          style={imageDark ? { color: "#f8f8f8" } : { color: "#3b2f2f" }}
        >
          {title}
        </h3>
        <date
          className="post1-header-title"
          style={imageDark ? { color: "#f8f8f8" } : { color: "#3b2f2f" }}
        >
          {date}
        </date>
      </div>
      <div className="post1-body">
        <p className={`post1-body-text ${open && "post1-body-text-open"}`}>
          {text}
        </p>
        <div
          className="post1-body-toggle"
          onClick={() => setState({ open: !state.open })}
        >
          <p className="post1-body-toggle-text">
            {open ? "close" : "read more"}
          </p>
          <i className={open ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
        </div>
      </div>
    </div>
  );
};
