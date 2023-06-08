import { Container } from "react-bootstrap";
import AboutMe from "./layout/AboutMe";
import FrontendCv from "./layout/FrontendCv";
import TechnicalIndustrial from "./layout/TechnicalIndustrial";

export default function Products() {
  return (
    <Container className="mt-5">
      <AboutMe />
      <FrontendCv />
      <TechnicalIndustrial />
    </Container>
  );
}
