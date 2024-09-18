import React from "react";
import { useParams } from "react-router-dom";
import { list } from "../data/Data"; // Import dữ liệu sản phẩm

const ProductDetail = () => {
  const { id } = useParams(); // Lấy id từ URL
  const product = list.find((item) => item.id === parseInt(id)); // Tìm sản phẩm theo id

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.cover} alt={product.name} />
      <p>Category: {product.category}</p>
      <p>Location: {product.location}</p>
      <p>Price: {product.price}</p>
      <p>Type: {product.type}</p>
    </div>
  );
};

export default ProductDetail;
