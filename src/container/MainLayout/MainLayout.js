import React from "react";
import { Switch, Route } from "react-router-dom";
import { Button, DropdownButton, Dropdown, Form } from "react-bootstrap";
import { Header, Body, Footer } from "./MainLayout.style";
const MainLayout = (props) => {
  const childrenWithProps = React.Children.map(props.children, (child) => {
    return React.cloneElement(child, { onItemSelectedChanged: true });
  });

  const catList = [
    {
      title: "Mèo Anh Lông Ngắn",
      path: "/meoanhlongngan",
      active: true,
    },
    {
      title: "Mèo Anh Lông Dài",
      path: "/meoanhlongdai",
      active: false,
    },
    {
      title: "Mèo Muchkin",
      path: "/meomuchkin",
      active: false,
    },
    {
      title: "Mèo Con",
      path: "/meocon",
      active: false,
    },
  ];

  const catFood = [
    {
      title: "Catrang",
      path: "/hat/catrang",
      active: true,
    },
    {
      title: "Minino",
      path: "/minino",
      active: false,
    },
    {
      title: "Nutrience",
      path: "/nutrience",
      active: false,
    },
  ];
  const DiseaseCat = [
    {
      title: "Viêm Phúc Mạc (FIP)",
      path: "/benh/fip",
      active: true,
    },
    {
      title: "FIV",
      path: "/benh/fiv",
      active: false,
    },
    {
      title: "Bí Tiểu",
      path: "/benh/suythan",
      active: false,
    },
  ];

  // (*********** FUNCTION ************//
  function handleClick(event, url) {
    event.preventDefault();
    window.location.href = url;
  }
  // (*********** FUNCTION ************//

  return (
    <React.Fragment>
      {/* <h1>this is main layout</h1> */}
      <Header>
        <a className="logo" href="/home">
          <img src="/shi.jpg"></img>
        </a>

        <div className="button-dropdownMenu">
          <DropdownButton variant="info" id="dropdown-basic-button" title="Mèo Tìm Chủ">
            {catList.map((cat, index) => (
              <Dropdown.Item
                href="#"
                active={cat.active}
                key={index}
                onClick={(e) => handleClick(e, cat.path)}
              >
                {cat.title}
              </Dropdown.Item>
            ))}
          </DropdownButton>

          <DropdownButton variant="info" id="dropdown-basic-button" title="Thức Ăn Cho Mèo">
            {catFood.map((food, index) => (
              <Dropdown.Item
                href="#"
                active={food.active}
                onClick={(e) => handleClick(e, food.path)}
              >
                {food.title}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <DropdownButton variant="info" id="dropdown-basic-button" title="Bệnh Ở Mèo">
            {DiseaseCat.map((disease, index) => (
              <Dropdown.Item
                href="#"
                active={disease.active}
                onClick={(e) => handleClick(e, disease.path)}
                key={index}
              >
                {disease.title}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>

        <div className="header-search">
          {/* <Form.Group> */}
          <div className="search-field">
            <Form.Control type="text" placeholder="Tìm Kiếm" />
            <Button variant="info" size="sm">
              Search
            </Button>
          </div>
          {/* </Form.Group> */}
        </div>
      </Header>
      <Body>{childrenWithProps}</Body>
      {/* <div className="body-content">{childrenWithProps}</div> */}
      {/* <div className="footer"></div> */}
      <Footer>
        <h3>@Sashimeomeo</h3>
      </Footer>
    </React.Fragment>
  );
};

export default MainLayout;
