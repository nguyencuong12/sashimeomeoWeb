// import styled from ''
// const Header = styled.div`
// `;

import styled from "styled-components";

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
  @media only screen and (max-width: 840px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 840px) {
    .button-dropdownMenu {
      flex-wrap: wrap;
    }
  }
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

const Body = styled.div`
  margin: 50px 50px;
  min-height: 65vh;
`;

export { Header, Footer, Body };
