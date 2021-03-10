import styled from "styled-components";
export const ProductItemWrapper = styled.div`
  height: 350px;
  width: 300px;
  margin: 15px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #cccccc;

  cursor: pointer;

  > img {
    height: 40%;
    width: 80%;
    object-fit: contain;
    transition: 500ms all ease-in-out;
  }
  :hover > img {
    transform: scale(1.1);
  }
  > span {
    margin-top: 20px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
  }
  .price {
    font-weight: 750;
    color: red;
  }
`;
