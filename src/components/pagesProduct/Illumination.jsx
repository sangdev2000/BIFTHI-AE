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

const Illumination = () => {
  // State lưu trữ giá trị của các bộ lọc
  const [minPrice, setMinPrice] = useState(0); // Giá trị khởi điểm là 1.000.000
  const [maxPrice, setMaxPrice] = useState(30000);
  const [nameFilter, setNameFilter] = useState("");
  const [sortBy, setSortBy] = useState("Sort by Rated");
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  // Hàm để chuyển giá từ chuỗi về số
  const parsePrice = (priceString) => {
    // Kiểm tra nếu priceString là chuỗi, nếu không thì trả về 0 hoặc giá trị mặc định
    if (typeof priceString === "string") {
      return parseInt(priceString.replace(/[^0-9]/g, ""), 10);
    } else if (typeof priceString === "number") {
      // Nếu priceString đã là số, không cần xử lý, chỉ trả về giá trị đó
      return priceString;
    } else {
      // Trường hợp priceString không hợp lệ (null, undefined, v.v.), trả về giá trị mặc định
      return 0;
    }
  };

  // Hàm lọc sản phẩm dựa trên bộ lọc và category là "Illumination"
  const filteredProducts = list.filter((product) => {
    const productPrice = parsePrice(product.price); // Lấy giá sản phẩm dưới dạng số

    // Chỉ hiển thị sản phẩm có category là "Illumination"
    const matchesCategory = product.category === "Illumination";

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

  // Sắp xếp sản phẩm theo sortBy
  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (sortBy) {
      case "Sort by Price: ↑":
        return parsePrice(a.price) - parsePrice(b.price);
      case "Sort by Price: ↓":
        return parsePrice(b.price) - parsePrice(a.price);
      case "Sort by Rated":
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  return (
    <>
      <section className="blog-out mb">
        <Back
          title="ILLUMINATION"
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
                <img src={pricedown} />
              </Icon>
              <div>
                <p className="filter-title">Lowest price</p>
                <label>
                  From: {minPrice.toLocaleString()}$
                  <input
                    type="range"
                    min="0"
                    max="3000"
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    step="3000"
                    className="slider"
                  />
                </label>
              </div>
            </div>

            <div className="filter-item">
              <Icon>
                <img src={priceup} />
              </Icon>
              <div>
                <p className="filter-title">Maximum price</p>
                <label>
                  To: {maxPrice.toLocaleString()}$
                  <input
                    type="range"
                    min="10000"
                    max="50000"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    step="10000"
                    className="slider"
                  />
                </label>
              </div>
            </div>

            <div className="search-bar">
              <Icon>
                <img src={search} alt="search" />
              </Icon>
              <input
                className="filter-description"
                placeholder="Product name"
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)} // Cập nhật giá trị lọc theo tên
              />
            </div>

            {/* Bộ lọc sắp xếp */}
            <div className="sort-wrapper">
              <p
                className="filter-title"
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                style={{ cursor: "pointer" }}
              >
                {sortBy} <span>{showSortDropdown ? "▲" : "▼"}</span>
              </p>

              {showSortDropdown && (
                <div className="dropdown-content">
                  <div
                    className="dropdown-item"
                    onClick={() => setSortBy("Sort by Rated")}
                  >
                    Sort by Rated
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => setSortBy("Sort by Price: ↑")}
                  >
                    Sort by Price: ↑
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => setSortBy("Sort by Price: ↓")}
                  >
                    Sort by Price: ↓
                  </div>
                </div>
              )}
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

export default Illumination;

const Icon = styled.div`
  img {
    width: 100%;
  }
  display: flex;
  align-items: center;
`;