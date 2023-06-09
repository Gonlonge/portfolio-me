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

        <li className=" margin-top-small smaller-font-size">
          <Link to="/">Portfolio</Link>
        </li>
        <li className=" margin-top-small smaller-font-size">
          <Link to="/About">About</Link>
        </li>
        <li className="margin-top-small smaller-font-size">
          <Link to="/Contact">Contact</Link>
        </li>
      </nav>
    </div>
  );
}
