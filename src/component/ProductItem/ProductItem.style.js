import styled from "styled-components";
export const ProductItemWrapper = styled.div`
  height: 350px;
  width: 300px;
  border: 1px solid black;
  margin: 15px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  > img {
    height: 70%;
    width: 80%;
    object-fit: contain;
    transition: 500ms all ease-in-out;
  }
  :hover > img {
    transform: scale(1.1);
  }
  > span {
    margin-top: 20px;
  }
  .price {
    color: red;
  }
`;
