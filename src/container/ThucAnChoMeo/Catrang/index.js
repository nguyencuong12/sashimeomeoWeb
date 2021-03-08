import React from "react";
import ProductItem from "../../../component/ProductItem";
import { CatrangWrapper } from "./catrang.style";

const Catrang = () => {
  const catrangList = [
    {
      title: "catrang",
      amount: "5kg",
      image: "/catrang1.jfif",
      price: 2000000,
    },
    {
      title: "catrang",
      amount: "5kg",
      image: "/catrang1.jfif",
      price: 200,
    },
    {
      title: "catrang",
      amount: "5kg",
      image: "/catrang1.jfif",
      price: 200,
    },
  ];
  return (
    <React.Fragment>
      <h4>Catrang</h4>
      <CatrangWrapper>
        {catrangList.map((value, index) => (
          <ProductItem title={value.title} image={value.image} price={value.price}></ProductItem>
          // <ProductItem title={value.title} image={value.image} price={value.price}></ProductItem>
        ))}
        {/* <ProductItem title="catrang" image="/catrang1.jfif" price="200"></ProductItem>
      <ProductItem title="catrang" image="/catrang1.jfif" price="200"></ProductItem>

      <ProductItem title="catrang" image="/catrang1.jfif" price="200"></ProductItem>

      <ProductItem title="catrang" image="/catrang1.jfif" price="200"></ProductItem> */}
      </CatrangWrapper>
    </React.Fragment>
  );
};

export default Catrang;
