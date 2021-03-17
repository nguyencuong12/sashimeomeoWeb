import styled from "styled-components";
import { BsPersonSquare } from "react-icons/bs";

export const SidebarWrapper = styled.div`
  background-color: #22313f;
  width: ${(props) => (props.open === true ? "0%" : "26%")};
  background-color: #22313f;
  /* background-color: ${(props) => (props.open === true ? "red" : "green")}; */
  transition: width 200ms ease-in-out;
  /* padding: 10px; */
  overflow: hidden;
`;
export const AvatarUser = styled(BsPersonSquare)`
  color: #ffff;
`;

// export const SidebarHeader = styled.div`
//   color: red;
//   font-weight: 650;
// `;
export const SidebarContent = styled.div`
  padding: 10px;
  a {
    color: #ffffff;
    font-weight: 650;
    font-size: 14px;
  }
`;
export const SidebarProfileUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SidebarMenuList = styled.div`
  margin-top: 50px;
  color: #fff;
  display: flex;
  flex-direction: column;
`;

export const IconItem = styled.img`
  height: 35px;
`;
export const SidebarMenuItemsLeft = styled.div`
  > span {
    padding-left: 6px;
  }
`;

export const SidebarMenuItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 5px;
  :hover {
    background-color: #005d97;
  }
`;

// #005d97 !important
export const SidebarBody = styled.div``;
