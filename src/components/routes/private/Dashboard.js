// dependency imports
import { Link } from "react-router-dom";

// style imports
import "./style.min.css";

const Dashboard = () => (
  <div className="dashboard">
    <h2>DASHBOARD</h2>
    <Link to="/add-work">ADD WORK</Link>
    <Link to="/add-blog">ADD BLOG</Link>
  </div>
);

export default Dashboard;
