import React from "react";
import {
  SignupWrapper,
  SignupFormWrapper,
  SignupTitle,
  ButtonSubmit,
  SignupFormAuthen,
} from "./Signup.style";
import { Form, Col, Row, Container } from "react-bootstrap";
const Signup = () => {
  return (
    <SignupWrapper>
      <Container style={{ paddingTop: "100px" }}>
        <Row style={{ backgroundColor: "#fff" }}>
          <Col lg={"5"} style={{ padding: "0px" }}>
            <img src="/shib1.jpg" style={{ width: "95%", height: "100%" }}></img>
          </Col>
          <Col lg={"7"} style={{ paddingLeft: "20px" }}>
            <SignupFormWrapper>
              <SignupTitle>Sashimeomeo Signup</SignupTitle>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <ButtonSubmit variant="dark" size="lg" type="submit">
                  Signup
                </ButtonSubmit>

                <SignupFormAuthen>
                  <a href="/login">If you have account please click here to login</a>
                </SignupFormAuthen>
              </Form>
            </SignupFormWrapper>
          </Col>
        </Row>
      </Container>
    </SignupWrapper>
  );
};

export default Signup;
