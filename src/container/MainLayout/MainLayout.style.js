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
  }
  .button-dropdownMenu > .dropdown {
    margin-right: 12px;
  }
  .button-dropdownMenu > .dropdown:last-child {
    margin-right: 0px;
  }

  .logo > img {
    width: 120px;
    object-fit: contain;
    border-radius: 50%;
    margin-right: 10px;
  }
  .search-field {
    display: flex;
  }
  .search-field > input {
    margin-left: 3px;
  }
  .search-field > button {
    margin-left: 3px;
  }
`;

const Footer = styled.div`
  position: relative;
  bottom: 0;
  height: 50px;
  width: 100%;
  background-color: #17a2b8;
  > h3 {
    text-align: center;
    color: #fff;
  }
`;

const Body = styled.div`
  margin: 50px 50px;
`;

export { Header, Footer, Body };
