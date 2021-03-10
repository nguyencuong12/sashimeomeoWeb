import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  LoginFormWrapper,
  ButtonSubmit,
  LoginTitle,
  LoginWrapper,
  LoginFormAuthen,
} from "./Login.style";

const LoginPage = () => {
  return (
    <LoginWrapper>
      <Container style={{ padding: "100px 0px" }}>
        <Row style={{ backgroundColor: "#fff" }}>
          <Col lg={"5"} style={{ padding: "0px" }}>
            <img src="/shib1.jpg" style={{ width: "100%", height: "100%" }}></img>
          </Col>
          <Col lg={"7"} style={{ paddingLeft: "20px" }}>
            <LoginFormWrapper>
              <LoginTitle>Sashimeomeo Login</LoginTitle>
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
                  Login
                </ButtonSubmit>

                <LoginFormAuthen>
                  <a href="#">Forgot Password</a>
                  <p>
                    Don't have password <a href="#">Register here</a>
                  </p>
                </LoginFormAuthen>
              </Form>
            </LoginFormWrapper>
          </Col>
        </Row>
      </Container>
    </LoginWrapper>
  );
};

export default LoginPage;
