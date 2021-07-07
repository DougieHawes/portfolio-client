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
          onClick={() => window.scrollTo(0, 0)}
        >
          WORK
        </NavLink>
        <NavLink
          className="navbar-link"
          activeClassName="navbar-link-active"
          to="/skills"
          onClick={() => window.scrollTo(0, 0)}
        >
          SKILLS
        </NavLink>
        <NavLink
          className="navbar-link"
          activeClassName="navbar-link-active"
          to="/contact"
          onClick={() => window.scrollTo(0, 0)}
        >
          CONTACT
        </NavLink>
        <NavLink
          className="navbar-link"
          activeClassName="navbar-link-active"
          to="/blog"
          onClick={() => window.scrollTo(0, 0)}
        >
          BLOG
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
