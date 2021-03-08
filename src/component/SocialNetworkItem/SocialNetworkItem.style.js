import styled from "styled-components";
export const SocialImage = styled.div`
  max-width: 80px;
  max-height: 80px;
  /* object-fit: contain; */
  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const SocialWrapper = styled.div`
  background-color: ${(props) => props.colorTheme};
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-basis: 25%;
  justify-content: space-between;
  padding: 0px 20px;
  height: 150px;
  cursor: pointer;
  :hover ${SocialImage} {
    transform: scale(1.1);
    transition: transform 300ms ease-in-out;
  }
`;
export const SocialTitle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=DotGothic16&display=swap");
  font-family: "DotGothic16", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #000;
`;

export const SocialDescription = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=DotGothic16&display=swap");
  font-family: "DotGothic16", sans-serif;
`;
export const SocialItemLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SocialItemRight = styled.div``;
