import { Link } from "react-router-dom";
import home from "../../images/web.png";
import cv from "../../images/person.png";
import contact from "../../images/mail.png";

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
          <div>
            <img src={home} alt="" className="icon-navbar-item " />
          </div>
          <Link to="/">Portfolio</Link>
        </li>
        <li className=" margin-top-small smaller-font-size">
          <div>
            {" "}
            <img src={cv} alt="" className="icon-navbar-item " />
          </div>

          <Link to="/About">About</Link>
        </li>
        <li className="margin-top-small smaller-font-size">
          <div>
            {" "}
            <img src={contact} alt="" className="icon-navbar-item " />
          </div>

          <Link to="/Contact">Contact</Link>
        </li>
      </nav>
    </div>
  );
}
