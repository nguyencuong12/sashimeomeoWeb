import styled from "styled-components";
export const ProductItemWrapper = styled.div`
  position: relative;
  height: 350px;
  width: 300px;
  margin: 15px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 200ms ease-in-out;

  cursor: pointer;

  > img {
    height: 40%;
    width: 80%;
    object-fit: contain;
    transition: 500ms all ease-in-out;
    margin-bottom: 30px;
  }
  :hover > img {
    transform: scale(1.1);
  }
  :hover {
    box-shadow: 2px 2px 12px 2px rgba(0, 0, 0, 0.75);
  }
  > span {
    text-align: center;
    font-size: 16px;
    font-weight: 700;
  }
  .price {
    font-weight: 800;
    font-size: 19px;
    color: red;
  }
`;
export const Discount = styled.span`
  color: #000;
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px 10px;
  background-color: red;
  color: #fff;
`;
