import React from "react";
import ProductItem from "../../component/ProductItem";
import { MeoAnhLongNganWrapper } from "./MeoAnhLongNgan.style";
const MeoAnhLongNgan = () => {
  const meoAnhLongNganProductList = [
    {
      title: "Mèo Anh Lông Ngắn (Màu Bicolor)",
      price: 200,
      image: "/shi.jpg",
      discount: "10%",
    },
    {
      title: "Mèo Anh Lông Ngắn (Màu Bicolor 12)",
      price: 2020,
      image: "/shi.jpg",
      discount: "20%",
    },
    {
      title: "Mèo Anh Lông Ngắn (Màu Bicolor 12)",
      price: 2020,
      image: "/shi.jpg",
      discount: "20%",
    },
    {
      title: "Mèo Anh Lông Ngắn (Màu Bicolor 12)",
      price: 2020,
      image: "/shi.jpg",
      discount: "20%",
    },
    {
      title: "Mèo Anh Lông Ngắn (Màu Bicolor 12)",
      price: 2020,
      image: "/shi.jpg",
      discount: "20%",
    },
  ];
  return (
    <React.Fragment>
      <strong> meo anh long ngan</strong>
      <MeoAnhLongNganWrapper>
        {meoAnhLongNganProductList.map((value, index) => (
          <ProductItem
            title={value.title}
            key={index}
            image={value.image}
            price={value.price}
          ></ProductItem>
        ))}
      </MeoAnhLongNganWrapper>
    </React.Fragment>
  );
};

export default MeoAnhLongNgan;
