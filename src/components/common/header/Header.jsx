import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        {/* Menu bên trái cho các mục điều hướng */}
        <MenuLeft>
          <ul>
            <MenuItem>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/product">Sản Phẩm</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/about">About</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/contact">Contact</Link>
            </MenuItem>
          </ul>
        </MenuLeft>

        {/* Phần icon bên phải */}
        <MenuRight>
          <ul>
            <li>
              <Link to="/account">
                <FaUser />
              </Link>
            </li>
            <li>
              <FaSearch />
            </li>
            <li>
              <FaHeart />
            </li>
            <li>
              <Link to="/cart">
                <FaShoppingCart />
              </Link>
            </li>
          </ul>
        </MenuRight>
      </Container>
    </Wrapper>
  );
};

export default Header;
const Wrapper = styled.div`
  width: 100%;
  background-color: white; /* Đặt màu nền trắng */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Đổ bóng nhẹ cho header */
  height: 60px; /* Chiều cao cố định */
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px; /* Căn chỉnh nội dung trong header */
`;

const MenuLeft = styled.div`
  ul {
    display: flex;
    list-style: none;
    gap: 40px; /* Khoảng cách giữa các mục điều hướng */
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 16px;
    font-weight: 500;
    font-family: "Arial", sans-serif;
  }

  a:hover {
    color: gray;
  }
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
`;

const MenuRight = styled.div`
  ul {
    display: flex;
    list-style: none;
    gap: 20px;
    align-items: center;
  }

  li {
    font-size: 20px;
    cursor: pointer;
    color: black;
  }

  li:hover {
    color: gray;
  }

  a {
    color: black;
  }

  a:hover {
    color: gray;
  }
`;