import React, { useEffect, useReducer } from "react";
import { ProductItemWrapper } from "./ProductItem.style";
const ProductItem = (props) => {
  const { title, price, image, discount } = props;
  useEffect(() => {
    console.log("TITLE", title);
  });
  return (
    <ProductItemWrapper>
      <img src={image}></img>
      <span>{title}</span>
      <strong>{price}</strong>
      {/* <span>{price}</span> */}
    </ProductItemWrapper>
  );
};

export default ProductItem;
