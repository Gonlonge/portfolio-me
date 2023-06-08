import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav-footer">
      <nav className="nav container ">
        <h1 className="company-name">
          <Link className=" button-pointer-color header-text" to="/">
            G.L
          </Link>
        </h1>
        <ul>
          <li className=" margin-top-small">
            <Link to="/">Portfolio</Link>
          </li>
          <li className=" margin-top-small">
            <Link to="/About">About Me</Link>
          </li>
          <li className=" margin-top-small">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}