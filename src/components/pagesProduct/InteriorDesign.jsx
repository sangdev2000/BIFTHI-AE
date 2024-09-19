import React, { useState } from "react";
import Back from "../common/Back";
import "../home/recent/recent.css";
import img from "../images/about.jpg";
import { list } from "../data/Data"; // Import dữ liệu sản phẩm
import styled from "styled-components";
import icon1 from "../images/Armchair.png";
import icon2 from "../images/Roundchair.png";
import icon3 from "../images/Stool.png";
import icon4 from "../images/Wardrobe.png";
import priceup from "../images/priceup.png";
import pricedown from "../images/pricedown.png";
import search from "../images/search.png";
import AllProduct from "../products/AllProduct";


const InteriorDesign = () => {
  // State lưu trữ giá trị của các bộ lọc
  const [minPrice, setMinPrice] = useState(""); // Giá min
  const [maxPrice, setMaxPrice] = useState(""); // Giá max
  const [nameFilter, setNameFilter] = useState("");

  // Hàm để chuyển giá từ chuỗi về số
  const parsePrice = (priceString) => {
    return parseInt(priceString.replace(/[^0-9]/g, ""), 10);
  };

  // Hàm lọc sản phẩm dựa trên bộ lọc và category là "Interior Design"
  const filteredProducts = list.filter((product) => {
    const productPrice = parsePrice(product.price); // Lấy giá sản phẩm dưới dạng số

    // Chỉ hiển thị sản phẩm có category là "Interior Design"
    const matchesCategory = product.category === "Interior Design";

    // Lọc theo khoảng giá
    const matchesPrice =
      (minPrice ? productPrice >= parsePrice(minPrice) : true) &&
      (maxPrice ? productPrice <= parsePrice(maxPrice) : true);

    // Lọc theo name (Tên sản phẩm)
    const matchesName = nameFilter
      ? product.name.toLowerCase().includes(nameFilter.toLowerCase())
      : true;

    return matchesCategory && matchesPrice && matchesName;
  });

  return (
    <>
      <section className="blog-out mb">
        <Back
          title="INTERIOR DESIGN"
          cover={img}
          icon1={icon1}
          icon2={icon2}
          icon3={icon3}
          icon4={icon4}
        />

        {/* Bộ lọc sản phẩm */}
        <div className="filter-wrapper">
          <div className="filter-container">
            <div className="filter-item">
              <Icon>
                <img src={pricedown} alt="price down" />
              </Icon>
              <div>
                <p className="filter-title">Giá thấp nhất</p>
                <input
                  className="filter-description"
                  placeholder="Hãy nhập giá"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)} // Cập nhật giá trị lọc theo giá min
                />
              </div>
            </div>

            <div className="filter-item">
              <Icon>
                <img src={priceup} alt="price up" />
              </Icon>
              <div>
                <p className="filter-title">Giá tối đa</p>
                <input
                  className="filter-description"
                  placeholder="Hãy nhập giá"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)} // Cập nhật giá trị lọc theo giá max
                />
              </div>
            </div>

            <div className="search-bar">
              <Icon>
                <img src={search} alt="search" />
              </Icon>
              <input
                className="filter-description"
                placeholder="Tên sản phẩm"
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)} // Cập nhật giá trị lọc theo tên
              />
            </div>
          </div>
        </div>

        {/* Danh sách sản phẩm */}
        <div className="container recent">
          <AllProduct products={filteredProducts} />
        </div>
      </section>
    </>
  );
};

export default InteriorDesign;

const Icon = styled.div`
  img {
    width: 100%;
  }
  display: flex;
  align-items: center;
`;
