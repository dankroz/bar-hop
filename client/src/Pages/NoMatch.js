import React from "react";
import { Col, Row, Container } from "../Components/Grid";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
         
            <h1>404 Page Not Found</h1>
            <p>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </p>
          
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;