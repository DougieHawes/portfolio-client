// dependency imports
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <NavLink
          className="navbar-link"
          activeClassName="navbar-link-active"
          to="/work"
        >
          WORK
        </NavLink>
        <NavLink
          className="navbar-link"
          activeClassName="navbar-link-active"
          to="/skills"
        >
          SKILLS
        </NavLink>
        <NavLink
          className="navbar-link"
          activeClassName="navbar-link-active"
          to="/contact"
        >
          CONTACT
        </NavLink>
        <NavLink
          className="navbar-link"
          activeClassName="navbar-link-active"
          to="/blog"
        >
          BLOG
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
