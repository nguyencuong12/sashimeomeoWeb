import styled from "styled-components";
import { Button } from "react-bootstrap";

export const LoginWrapper = styled.div`
  background: #ccc;
  min-height: 100vh;
  overflow: hidden;
`;

export const LoginFormWrapper = styled.div`
  padding: 40px 10px;
`;

export const ButtonSubmit = styled(Button)`
  width: 100%;
`;

export const LoginTitle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Akaya+Telivigala&display=swap");
  font-family: "Akaya Telivigala", cursive;
  font-size: 35px;
  font-weight: 900;
  text-align: center;
`;

export const LoginFormAuthen = styled.div`
  margin-top: 20px;
  a {
    color: #000;
  }
`;
