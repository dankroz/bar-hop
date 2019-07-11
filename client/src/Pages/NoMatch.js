import React from "react";
import { Col, Row, Container } from "../Components/Grid";
import Button from "../Components/Button";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
         
            <h1>404 Page Not Found</h1>
            <br></br>

            <p>
              <span role="img" aria-label="Face With Rolling Eyes Emoji" style="align: center">
                🙄
              </span>
            </p>

            <Button>GO BACK</Button>
          
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;