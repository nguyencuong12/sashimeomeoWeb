import React, { useEffect, useReducer } from "react";
import { ProductItemWrapper } from "./ProductItem.style";
import NumberFormat from "react-number-format";

const ProductItem = (props) => {
  const { title, price, image, discount } = props;
  useEffect(() => {
    console.log("TITLE", title);
  });

  // //
  return (
    <ProductItemWrapper>
      <img src={image}></img>
      <span>{title}</span>
      {/* <strong>{price}</strong> */}
      <NumberFormat
        className="price"
        value={price}
        displayType={"text"}
        thousandSeparator={true}
        suffix="đ"
      ></NumberFormat>
      {/* <span>{price}</span> */}
    </ProductItemWrapper>
  );
};

export default ProductItem;
