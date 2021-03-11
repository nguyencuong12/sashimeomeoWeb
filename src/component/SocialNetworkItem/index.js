import React, { useEffect } from "react";
import {
  SocialWrapper,
  SocialTitle,
  SocialDescription,
  SocialImage,
  SocialItemLeft,
  SocialItemRight,
} from "./SocialNetworkItem.style";
const SocialNetworkItem = (props) => {
  const { title, description, colorTheme, image, url } = props;
  function handleClickSocialNetWork(event, url) {
    event.preventDefault();
    window.open(url);
  }
  return (
    <SocialWrapper colorTheme={colorTheme} onClick={(e) => handleClickSocialNetWork(e, url)}>
      <SocialItemLeft>
        <SocialTitle>{title}</SocialTitle>
        <SocialDescription>{description}</SocialDescription>
      </SocialItemLeft>

      <SocialItemRight>
        <SocialImage>
          <img src={`${image}`}></img>
        </SocialImage>
      </SocialItemRight>
    </SocialWrapper>
  );
};

export default SocialNetworkItem;
