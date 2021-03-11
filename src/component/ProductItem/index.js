import React, { useEffect, useReducer } from "react";
import { ProductItemWrapper, Discount } from "./ProductItem.style";
import NumberFormat from "react-number-format";

const ProductItem = (props) => {
  const { title, price, image, discount, url } = props;
  useEffect(() => {
    console.log("TITLE", title);
  });
  function handleClickProduct(e, url) {
    e.preventDefault();
    console.log("CLICK", url);
    window.location.href = url;
  }
  // //
  return (
    <ProductItemWrapper onClick={(e) => handleClickProduct(e, url)}>
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
      {discount ? <Discount>{discount}</Discount> : null}
      {/* <Discount>{discount}</Discount> */}
      {/* <span className="discount">{discount}</span> */}
      {/* <span>{price}</span> */}
    </ProductItemWrapper>
  );
};

export default ProductItem;
