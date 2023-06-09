import { Link } from "react-router-dom";
import home from "../../images/web.png";
import cv from "../../images/person.png";
import contact from "../../images/message.png";

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
            <Link to="/">
              {" "}
              <img src={home} alt="" className="icon-navbar-item " />
            </Link>
            <div>
              <Link to="/">Portfolio</Link>
            </div>
          </div>
        </li>
        <li className=" margin-top-small smaller-font-size">
          <div>
            <Link to="/About">
              <img src={cv} alt="" className="icon-navbar-item " />
            </Link>
          </div>
          <div>
            {" "}
            <Link to="/About">About</Link>
          </div>
        </li>
        <li className="margin-top-small smaller-font-size">
          <div>
            {" "}
            <Link to="/Contact">
              {" "}
              <img src={contact} alt="" className="icon-navbar-item " />
            </Link>{" "}
          </div>
          <div>
            {" "}
            <Link to="/Contact">Contact</Link>
          </div>
        </li>
      </nav>
    </div>
  );
}
