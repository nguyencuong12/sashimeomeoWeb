import React from "react";
import { Button } from "react-bootstrap";
// import SocialItem from "../../component/SocialNetworkItem";
// import SocialItem from "../../component/SocialNetworkItem";
import SocialItem from "../../component/SocialNetworkItem";
import { Banner, SocialNetWork, Fanpage, Tiktok, Youtube } from "./HomePage.style";
const HomePage = () => {
  const SocialNetWorkList = [
    {
      title: "Fanpage",
      description: "sashimeomeo",
      colorTheme: "#3b5998",
      image: "facebookIcon.png",
      url: "https://www.facebook.com/Sashimeomeo-100849721948917",
    },
    {
      title: "Tiktok",
      description: "@sashimeomeo",
      colorTheme: "#69c9d0",
      image: "tiktokIcon.png",
      url: "https://www.tiktok.com/@sashimmeomeo?lang=vi-VN",
    },
    {
      title: "Youtube",
      description: "sashimeomeo",
      colorTheme: "#ff0000",
      image: "youtubeLogo1.jpg",
      url: "https://www.youtube.com/channel/UCesFWibG8Db0T7QTpL-otRg",
    },
  ];
  return (
    <React.Fragment>
      <strong>Home</strong>
      <Banner>
        <div className="banner-description">
          <h3>@ Sashimeomeo Website @ </h3>
          <span>1 Đống mèo ...</span>
          <Button href="#">Đọc Thêm</Button>
        </div>
        <div className="banner-image">
          <img src="/shibackground.jpg"></img>
        </div>
      </Banner>
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
        {/* <SocialItem></SocialItem> */}
        {/* <Fanpage>
          <div className="fanpage-description"></div>
          <div className="fanpage-image"></div>
        </Fanpage>
        <Tiktok>
          <div className="tiktok-description">Tiktok Description</div>
          <div className="tiktok-image">
            <img src="/tiktokIcon.png"></img>
          </div>
        </Tiktok>
        <Youtube>
          <div className="youtube-description"></div>
          <div className="youtube-image"></div>
        </Youtube> */}
      </SocialNetWork>
    </React.Fragment>
  );
};

export default HomePage;
