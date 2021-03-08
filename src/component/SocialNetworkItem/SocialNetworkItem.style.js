import styled from "styled-components";
export const SocialImage = styled.div`
  max-width: 120px;
  max-height: 120px;
  /* .grow { transition: all .2s ease-in-out; } */
  transition: all 400ms ease-in-out;
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
  flex-grow: 1;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 200px;
  cursor: pointer;
  :hover ${SocialImage} {
    transform: scale(1.1);
  }
`;
export const SocialTitle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=DotGothic16&display=swap");
  font-family: "DotGothic16", sans-serif;
  font-size: 30px;
  font-weight: 800;
  color: #fff;
`;

export const SocialDescription = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=DotGothic16&display=swap");
  font-family: "DotGothic16", sans-serif;
  color: #fff;
  font-size: 18px;
`;
export const SocialItemLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;
export const SocialItemRight = styled.div``;
