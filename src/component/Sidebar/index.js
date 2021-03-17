import React from "react";
import {
  SidebarWrapper,
  AvatarUser,
  SidebarContent,
  SidebarProfileUser,
  SidebarMenuList,
  SidebarMenuItems,
  IconItem,
  SidebarMenuItemsLeft,
} from "./Sidebar.style";
import { BsArrow90DegLeft, BsArrow90DegDown } from "react-icons/bs";

const Sidebar = (props) => {
  const meoAnhLongNgan = [
    {
      title: "Meo Bicolor",
    },
  ];

  const { open } = props;
  return (
    <SidebarWrapper open={open}>
      <SidebarContent>
        <SidebarProfileUser>
          <AvatarUser fontSize={"35"}></AvatarUser>
          <a href="#">NGUYEN NGOC CUONG</a>
        </SidebarProfileUser>

        <SidebarMenuList>
          <SidebarMenuItems>
            <SidebarMenuItemsLeft>
              <IconItem src="/icon/catIcon.svg"></IconItem>
              <span>Mèo Anh Lông Ngắn</span>
            </SidebarMenuItemsLeft>
            <BsArrow90DegLeft fontSize={"24"}></BsArrow90DegLeft>

            {/* <img src="/icon/catIcon.svg"></img> */}
          </SidebarMenuItems>

          <SidebarMenuItems>
            <SidebarMenuItemsLeft>
              <IconItem src="/icon/catIcon.svg"></IconItem>
              <span>Mèo Anh Lông Ngắn</span>
            </SidebarMenuItemsLeft>
            <BsArrow90DegLeft fontSize={"24"}></BsArrow90DegLeft>

            {/* <img src="/icon/catIcon.svg"></img> */}
          </SidebarMenuItems>
        </SidebarMenuList>
      </SidebarContent>
      {/* <SidebarHeader>HEADER SIDEBAR</SidebarHeader> */}
    </SidebarWrapper>
  );
};

export default Sidebar;
