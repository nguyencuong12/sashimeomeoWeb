import styled from "styled-components";
export const Banner = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Akaya+Telivigala&display=swap");

  min-height: 450px;
  width: 95%;
  background: #cce6ff;
  margin: auto;
  display: flex;

  .banner-description {
    flex-basis: 70%;
    font-family: "Akaya Telivigala", cursive;
    text-align: center;
    font-size: 19px;
    margin: 50px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > h3 {
      color: #17a2b8;
      font-weight: 600;
    }
    > a {
      margin-top: 10px;
    }
  }
  .banner-image {
    flex-basis: 30%;
  }
  .banner-image > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SocialNetWork = styled.div`
  margin-top: 50px;
  display: flex;

  /* justify-content: space-between; */
  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

// export const Fanpage = styled.div`
//   flex-basis: 30%;
//   border: 1px solid red;
//   text-align: center;
//   background-color: #3b5998;
// `;
// export const Tiktok = styled.div`
//   flex-basis: 30%;
//   background-color: #69c9d0;
//   border: 1px solid red;
//   display: flex;
//   .tiktok-description {
//     flex-basis: 70%;
//   }
// `;
// export const Youtube = styled.div`
//   flex-basis: 30%;
//   background-color: #ff0000;
//   border: 1px solid red;
// `;
