import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <div className="d-flex justify-content-between py-4">
          <p>gonlonge@icloud.com</p>
          <p>All rights reserved ©</p>
        </div>
      </Container>
    </div>
  );
}
