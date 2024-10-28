import React, { useState } from "react";
import Back from "../common/Back";
import "../home/recent/recent.css";
import img from "../images/about.jpg";
import { list } from "../data/Data";
import "./Product.css";
import AllProduct from "./AllProduct";
import map from "../images/map.png";
import up from "../images/up-down.png";
import styled from "styled-components";
import icon1 from "../images/Armchair.png";
import icon2 from "../images/Roundchair.png";
import icon3 from "../images/Stool.png";
import icon4 from "../images/Wardrobe.png";
import priceup from "../images/priceup.png";
import pricedown from "../images/pricedown.png";
import search from "../images/search.png";

const Product = ({ onUpdateWishlistCount }) => {
  // State lưu trữ giá trị của các bộ lọc
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(30000);
  const [sortBy, setSortBy] = useState("Sort by Rated");
  const [showSortDropdown, setShowSortDropdown] = useState(false);

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

  // Hàm xử lý khi thay đổi checkbox
  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Lấy tất cả các danh mục từ dữ liệu
  const allCategories = [...new Set(list.map((item) => item.category))];

  // Hàm lọc sản phẩm dựa trên bộ lọc
  const filteredProducts = list.filter((product) => {
    const productPrice = parsePrice(product.price); // Lấy giá sản phẩm dưới dạng số

    // Lọc theo category
    const matchesCategory =
      selectedCategories.length > 0
        ? selectedCategories.includes(product.category)
        : true;

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
          title="Products"
          cover={img}
          icon1={icon1}
          icon2={icon2}
          icon3={icon3}
          icon4={icon4}
        />

        {/* Bộ lọc sản phẩm */}
        <div className="filter-wrapper">
          <div className="filter-container">
            {/* Lọc theo loại phòng */}
            <div className="filter-item dropdown">
              <div>
                <img src={map} alt="map" style={{ width: "100%" }} />
              </div>
              <p class="filter-title">Categories</p>
              <div>
                <p
                  className="filter-title"
                  onClick={() => setShowDropdown(!showDropdown)}
                  style={{ cursor: "pointer" }}
                >
                  {showDropdown ? "▲" : "▼"}
                </p>

                {/* Hiển thị dropdown khi nhấn vào */}
                {showDropdown && (
                  <div className="dropdown-content">
                    {allCategories.map((category, index) => (
                      <div key={index} className="dropdown-item">
                        <input
                          type="checkbox"
                          id={`category-${index}`}
                          value={category}
                          checked={selectedCategories.includes(category)}
                          onChange={() => handleCategoryChange(category)}
                        />
                        <label htmlFor={`category-${index}`}>{category}</label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Lọc theo giá */}
            <div className="filter-item">
              <Icon>
                <img src={pricedown} />
              </Icon>
              <div>
                <p className="filter-title">Price</p>
                <label>
                  From: {minPrice.toLocaleString()}$
                  <input
                    type="range"
                    min="0"
                    max="3000"
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    step="1000"
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
                <p className="filter-title">Price</p>
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

            {/* Tìm kiếm sản phẩm */}
            <div className="search-bar">
              <Icon>
                <img src={search} />
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
          <AllProduct
            products={sortedProducts}
            onUpdateWishlistCount={onUpdateWishlistCount}
          />
        </div>
      </section>
    </>
  );
};

export default Product;

// Icon styled component
const Icon = styled.div`
  img {
    width: 100%;
  }
  display: flex;
  align-items: center;
`;
