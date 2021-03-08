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
      description: "abc",
      colorTheme: "#3b5998",
      image: "facebookIcon.png",
      url: "https://www.facebook.com/Sashimeomeo-100849721948917",
    },
    {
      title: "Tiktok",
      description: "abc",
      colorTheme: "#69c9d0",
      image: "tiktokIcon.png",
      url: "https://www.tiktok.com/@sashimmeomeo?lang=vi-VN",
    },
    {
      title: "Youtube",
      description: "abc",
      colorTheme: "#ff0000",
      image: "youtubeIcon.png",
      url: "https://www.youtube.com/channel/UCesFWibG8Db0T7QTpL-otRg",
    },
  ];
  return (
    <React.Fragment>
      <strong>Home</strong>
      <Banner>
        <div className="banner-description">
          <h3>Đây Là Trang Web Của Sashimeomeo </h3>
          <span>
            Sint laborum culpa fugiat ad. Nulla duis dolore Lorem occaecat nisi est dolor aliqua
            Lorem Lorem id eu incididunt ea. Magna qui dolore mollit duis cupidatat occaecat
            incididunt aliqua aute aute aliqua incididunt. Consequat cillum sunt labore enim cillum
            incididunt excepteur incididunt id pariatur do. Voluptate ea sint consequat quis. Mollit
            laborum reprehenderit ut quis sit nisi in ea. Incididunt mollit exercitation sunt cillum
            magna commodo nostrud laboris. Consequat irure anim amet dolor. Irure anim minim tempor
            mollit. Enim ex laboris culpa qui quis duis cillum minim nisi dolor et quis. Commodo
            commodo ipsum laborum pariatur culpa nulla exercitation consequat.
          </span>
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
