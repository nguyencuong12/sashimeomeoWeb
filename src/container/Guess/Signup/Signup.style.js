import styled from "styled-components";
import { Button } from "react-bootstrap";

export const SignupWrapper = styled.div`
  background: #ccc;
  height: 100vh;
`;

export const SignupFormWrapper = styled.div`
  padding: 40px 10px;
`;

export const ButtonSubmit = styled(Button)`
  width: 100%;
`;

export const SignupTitle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Akaya+Telivigala&display=swap");
  font-family: "Akaya Telivigala", cursive;
  font-size: 35px;
  font-weight: 900;
  text-align: center;
`;

export const SignupFormAuthen = styled.div`
  margin-top: 20px;
  > a {
    color: #000;
  }
`;
