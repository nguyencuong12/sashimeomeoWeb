// import styled from ''
// const Header = styled.div`
// `;

import styled from "styled-components";
import { BsCardList, BsCardChecklist } from "react-icons/bs";

export const HambugerButton = styled.div`
  cursor: pointer;
  transition: all 300ms ease-in-out;
  color: ${(props) => (props.open == true ? "red" : "#22313f")};
  :hover {
    transform: scale(1.1);
  }
`;
export const HambugerButtonList = styled(BsCardList)``;
export const HambugerButtonListCheck = styled(BsCardChecklist)``;

export const HeaderLeft = styled.div`
  min-width: 360px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const HeaderRight = styled.div``;

const Header = styled.div`
  width: 100%;
  background: #ffffff;
  border-bottom: 1px solid #ccc;
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* justify-content: space-between; */

  padding: 20px 20px;

  .button-dropdownMenu {
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: center;
    align-items: center;
    /* margin: 10px; */
  }
  .button-dropdownMenu > .dropdown {
    margin: 5px;
  }
  .button-dropdownMenu > .dropdown:last-child {
    margin-right: 0px;
  }

  .logo > img {
    width: 120px;
    object-fit: contain;
    border-radius: 50%;
    margin: 10px;
  }
  .search-field {
    display: flex;
    margin: 10px;
  }
  .search-field > input {
    margin-left: 3px;
  }
  .search-field > button {
    margin-left: 3px;
  }

  /* .test:hover BodySidebar {
    display: block;
  } */

  @media only screen and (max-width: 840px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 840px) {
    .button-dropdownMenu {
      flex-wrap: wrap;
    }
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #000;
  font-weight: 650;
`;

const Body = styled.div`
  margin: 10px 0px 50px 0px;
  min-height: 68vh;
  display: flex;
  border: 1px solid black;
  /* border: ${(props) => (props.open === true ? "1px solid #009900" : "1px solid black")}; */
  background-color: #eef1f5;
`;
const BodySidebar = styled.div`
  /* width: 20%; */
  /* min-height: 100%; */
`;
const BodyContent = styled.div`
  width: 100%;
  min-height: 100%;
  transition: width 200ms ease-in-out;
`;

const Footer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Akaya+Telivigala&display=swap");
  position: relative;
  bottom: 0;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #17a2b8;
  /* > h3 {
    text-align: center;
    color: #fff;
  } */
  > h3 {
    font-weight: 800;
    font-family: "Akaya Telivigala", cursive;
  }
`;
export { Header, Footer, Body, BodySidebar, BodyContent };
