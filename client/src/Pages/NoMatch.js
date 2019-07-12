import React from "react";
import { Col, Row, Container } from "../Components/Grid";
import Button from "../Components/Button"

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
            <Button>Hello</Button>    
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;