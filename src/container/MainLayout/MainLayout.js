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
  ];

  const catFood = [
    {
      title: "Catrang",
      path: "/catrang",
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
      path: "/catrang",
      active: true,
    },
    {
      title: "FIV",
      path: "/catrang",
      active: false,
    },
    {
      title: "Bí Tiểu",
      path: "/catrang",
      active: false,
    },
  ];

  return (
    <React.Fragment>
      {/* <h1>this is main layout</h1> */}
      <Header>
        <a className="logo" href="#">
          <img src="/shi.jpg"></img>
        </a>

        <div className="button-dropdownMenu">
          <DropdownButton variant="info" id="dropdown-basic-button" title="Mèo">
            {catList.map((cat, index) => (
              <Dropdown.Item href="#" active={cat.active}>
                {cat.title}
              </Dropdown.Item>
            ))}
          </DropdownButton>

          <DropdownButton variant="info" id="dropdown-basic-button" title="Thức Ăn Cho Mèo">
            {catFood.map((food, index) => (
              <Dropdown.Item href="#" active={food.active}>
                {food.title}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <DropdownButton variant="info" id="dropdown-basic-button" title="Bệnh Ở Mèo">
            {DiseaseCat.map((disease, index) => (
              <Dropdown.Item href="#" active={disease.active}>
                {disease.title}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>

        <div className="header-search">
          {/* <Form.Group> */}
          <div className="search-field">
            <Form.Control type="text" placeholder="Normal text" />
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
        <h3>This is footer</h3>
      </Footer>
    </React.Fragment>
  );
};

export default MainLayout;
