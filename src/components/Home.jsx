import { Container, Row, Col } from "react-bootstrap";
import pictureOfMe from "../images/me.jpg";
import React from "react";
import Portfolio from "./layout/Portfolio";

export default function Home() {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={4}>
          <img src={pictureOfMe} alt="" className="rounded-circle img-fluid" />
        </Col>
        <Col xs={12} md={8}>
          <h2 className="mb-0">Gonzalo Longe</h2>
          <h3 className="mb-3">Frontend Developer</h3>
          <p>
            Passionate about technology, I am driven by curiosity and a desire
            to stay up-to-date with the latest industry trends. I constantly
            seek opportunities to expand my knowledge and explore emerging
            technologies.
          </p>
        </Col>
      </Row>
      <Portfolio />
    </Container>
  );
}
