// dependency imports
import { useState } from "react";
import { Fade } from "react-reveal";

// style imports
import "./style.min.css";

export const Post1 = ({ title, date, text, imageDark }) => {
  const [open, toggleOpen] = useState(false);

  return (
    <div className="post1">
      <div className="post1-header">
        <h3
          className="post1-header-title"
          style={imageDark ? { color: "#f8f8f8" } : { color: "#3b2f2f" }}
        >
          {title}
        </h3>
        <div
          className="post1-header-date"
          style={imageDark ? { color: "#f8f8f8" } : { color: "#3b2f2f" }}
        >
          {date}
        </div>
        {open && (
          <i
            className="fas fa-times close-icon"
            style={imageDark ? { color: "#f8f8f8" } : { color: "#3b2f2f" }}
            onClick={() => toggleOpen(false)}
          ></i>
        )}
      </div>
      <div className="post1-body">
        <p className={`post1-body-text ${open && "post1-body-text-open"}`}>
          {text}
        </p>
        <div className="post1-body-toggle" onClick={() => toggleOpen(!open)}>
          <p className="post1-body-toggle-text">
            {open ? "close" : "read more"}
          </p>
          <i className={open ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
        </div>
      </div>
    </div>
  );
};
