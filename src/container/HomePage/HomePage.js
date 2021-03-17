import React from "react";
import { Button, Carousel } from "react-bootstrap";
// import SocialItem from "../../component/SocialNetworkItem";
// import SocialItem from "../../component/SocialNetworkItem";
import SocialItem from "../../component/SocialNetworkItem";
import ProductItem from "../../component/ProductItem";

import {
  Banner,
  HomeWrapper,
  SocialNetWork,
  AdvertiseAccessories,
  AdvertiseFood,
  AdvertiseWrapper,
  Advertise,
  AdvertiseTitle,
  AdvertiseItem,
} from "./HomePage.style";
const HomePage = () => {
  const SocialNetWorkList = [
    {
      title: "Fanpage",
      description: "sashimeomeo",
      colorTheme: "#3b5998",
      image: "/facebookIcon.png",
      url: "https://www.facebook.com/Sashimeomeo-100849721948917",
    },
    {
      title: "Tiktok",
      description: "@sashimeomeo",
      colorTheme: "#69c9d0",
      image: "/tiktokIcon.png",
      url: "https://www.tiktok.com/@sashimmeomeo?lang=vi-VN",
    },
    {
      title: "Youtube",
      description: "sashimeomeo",
      colorTheme: "#ff0000",
      image: "https://pbs.twimg.com/profile_images/1268210362186379264/YM-ZazHV.jpg",
      url: "https://www.youtube.com/channel/UCesFWibG8Db0T7QTpL-otRg",
    },
  ];

  const catrangList = [
    {
      title: "catrang",
      amount: "5kg",
      image: "/catrang1.jfif",
      price: 2000000,
    },
    {
      title: "catrang",
      amount: "5kg",
      image: "/catrang1.jfif",
      price: 200,
    },
    {
      title: "catrang",
      amount: "5kg",
      image: "/catrang1.jfif",
      price: 200,
    },
  ];

  const meoAnhLongNganProductList = [
    {
      title: "Mèo Anh Lông Ngắn (Màu Bicolor)",
      price: 200,
      image:
        "data:image/jpeg;base64,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",
      discount: "10%",
      url: "/muabanmeo/bicolor",
    },
    {
      title: "Mèo Anh Lông Ngắn (Màu Black Golden ny12)",
      price: 2020,
      image: "https://petto.vn/wp-content/uploads/2020/10/meo-golden-ny12.jpg?v=1603869452",
      discount: "20%",
      url: "/muabanmeo/ny12",
    },
    {
      title: "Mèo Anh Lông Ngắn (Màu Black Golden 25)",
      price: 2020,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUGHOvRebHXebLxp8nG98hN22O8KkDpKi-wQ&usqp=CAU",
      discount: "20%",
      url: "/muabanmeo/ny25",
    },
    {
      title: "Mèo Anh Lông Ngắn (Màu Black Golden   ny11)",
      price: 2020,
      image:
        "https://lh3.googleusercontent.com/4qTbfkgROs_WLwtZhm8Ytbu8mdQQvFZei8JHT5fW4dEL-9lKDa1oYWIwd6k9nmoar7kmUdcqDLvVFRFge3OdYtKjd4FPTw=w600",
      discount: "20%",
      url: "/muabanmeo/ny11",
    },
    {
      title: "Mèo Anh Lông Ngắn (Màu Black Silver ns11)",
      price: 2020,
      image:
        "data:image/jpeg;base64,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",
      discount: "20%",
      url: "/muabanmeo/silver-ns11",
    },
  ];

  return (
    <HomeWrapper>
      <strong>Home</strong>
      <div className="carousel-wrapper">
        <Carousel fade interval={4000} pause="hover" style={{ cursor: "pointer", width: "1028px" }}>
          <Carousel.Item>
            <img
              className="d-block w-100 imgBanner"
              src="https://wallpaperaccess.com/full/32048.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 imgBanner"
              // src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
              src="https://www.catbreedslist.com/cat-wallpapers/Maine-Coon-kitten-cute-fluffy-1024x768.jpg"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 imgBanner"
              src="https://images.wallpaperscraft.com/image/cat_profile_dark_166877_1024x768.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* <Banner>
        <div className="banner-description">
          <h3>@ Sashimeomeo Website @ </h3>
          <span>1 Đống mèo ...</span>
          <Button href="#">Đọc Thêm</Button>
        </div>
        <div className="banner-image">
          <img src="/shibackground.jpg"></img>
        </div>
      </Banner> */}
      <AdvertiseWrapper>
        <Advertise>
          <AdvertiseTitle>Mèo Anh Lông Ngắn</AdvertiseTitle>
          <AdvertiseItem>
            {meoAnhLongNganProductList.map((value, index) => (
              <ProductItem
                title={value.title}
                key={index}
                image={value.image}
                price={value.price}
                url={value.url}
              ></ProductItem>
            ))}
          </AdvertiseItem>
        </Advertise>
        <AdvertiseTitle>Thức Ăn Cho Mèo</AdvertiseTitle>
        <AdvertiseItem>
          {catrangList.map((value, index) => (
            <ProductItem
              title={value.title}
              key={index}
              image={value.image}
              price={value.price}
              url={value.url}
            ></ProductItem>
          ))}
        </AdvertiseItem>
      </AdvertiseWrapper>

      <SocialNetWork>
        {SocialNetWorkList.map((value, index) => (
          <SocialItem
            key={index}
            title={value.title}
            description={value.description}
            colorTheme={value.colorTheme}
            image={value.image}
            url={value.url}
          ></SocialItem>
        ))}
      </SocialNetWork>
    </HomeWrapper>
  );
};

export default HomePage;
