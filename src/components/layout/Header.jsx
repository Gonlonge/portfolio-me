import Nav from "./Nav";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Container>
        <div className="icon mt-2 ">
          <Link to="/">
            <h1 className=" button-pointer-color">G . L</h1>
          </Link>
        </div>
      </Container>
      <Nav />
    </>
  );
}
