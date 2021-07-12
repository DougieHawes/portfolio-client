// dependency imports
import { useState } from "react";
import { Fade } from "react-reveal";

// style imports
import "./style.min.css";

export const Post1 = ({ title, date, text, imageDark }) => {
  const [open, toggleOpen] = useState(false);

  const getMonth = (n) => {
    switch (n) {
      case "01":
        return "January";
      case "02":
        return "February";
      case "03":
        return "March";
      case "04":
        return "April";
      case "05":
        return "May";
      case "06":
        return "June";
      case "07":
        return "July";
      case "08":
        return "August";
      case "09":
        return "September";
      case "10":
        return "October";
      case "11":
        return "November";
      case "12":
        return "December";
      default:
        return "unknown month";
    }
  };

  const getDay = (n) => {
    let suffix;

    switch (n) {
      case n == "1" || n == "21" || n == "31":
        suffix = "st";
      case n == "2" || n == "22":
        suffix = "st";
      case n == "3" || n == "23":
        suffix = "st";
      default:
        suffix = "th";
    }

    return n + suffix;
  };

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
          {getDay(date.slice(8, 10))} {getMonth(date.slice(5, 7))}{" "}
          {date.slice(0, 4)}
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
