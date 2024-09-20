import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaHeart, FaCartPlus } from "react-icons/fa";
import Wishlist from "../wishlist/WistList";

const AllProduct = ({ products }) => {
  // Lưu trạng thái wishlist vào localStorage
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const [showWishlist, setShowWishlist] = useState(false);

  // Function to add an item to the wishlist
  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const newWishlist = !prevWishlist.some((item) => item.id === product.id)
        ? [...prevWishlist, product]
        : prevWishlist;
      localStorage.setItem("wishlist", JSON.stringify(newWishlist));
      return newWishlist;
    });
    setShowWishlist(true);
  };

  // Function to remove an item from the wishlist
  const handleRemoveItem = (id) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter((item) => item.id !== id);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  return (
    <>
      <Content>
        {products?.map((val) => {
          const { id, cover, category, name, price } = val;
          return (
            <Box key={id}>
              <Link to={`/product/${id}`}>
                <ImageWrapper>
                  <img src={cover} alt={name} />
                </ImageWrapper>
                <Text>
                  <div className="category">
                    <span>{category}</span>
                  </div>
                  <h4>{name}</h4>
                </Text>
                <Price>{price}</Price>
              </Link>
              <Overlay className="overlay">
                <ButtonWrapper>
                  <button className="cart-button">ADD TO CART</button>
                </ButtonWrapper>
                <button
                  className="wishlist-button"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent navigation on wishlist button click
                    addToWishlist({ id, cover, category, name, price });
                  }}
                >
                  <FaHeart />
                </button>
              </Overlay>
            </Box>
          );
        })}
      </Content>

      {/* Show wishlist modal */}
      {showWishlist && (
        <Wishlist
          wishlistItems={wishlist}
          onClose={() => setShowWishlist(false)}
          onRemoveItem={handleRemoveItem}
        />
      )}
    </>
  );
};

export default AllProduct;

// Các styled components
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding: 20px;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Box = styled.div`
  width: calc(100% / 3 - 30px);
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    transition: all 0.25s linear;
  }

  &:hover .overlay {
    bottom: 0;
  }

  @media screen and (max-width: 768px) {
    width: calc(100% / 2 - 20px);
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: 391.6px;
    object-fit: cover;
  }
`;

const Text = styled.div`
  h4 {
    color: #292929;
    font-family: "Work Sans";
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
  }

  .category {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      padding: 5px 10px;
      border-radius: 5px;
      margin-right: 10px;
      background: #f3b25a;
      color: #fff;
      font-size: 14px;
    }
  }
`;

const Price = styled.div`
  font-size: 20px;
  color: #333;
  margin-top: 10px;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Work Sans";
  font-size: 16px;
  transition: all 0.3s ease;
  cursor: pointer;

  .wishlist-button {
    background-color: #3d3d3d;
    color: #fff;
    padding: 0 30px;
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;

    &:hover {
      background-color: #d2c4ae;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
  background-color: #100f0e;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #d2c4ae;
  }
  .cart-button {
    background-color: transparent;
    border: none;
    color: white;
    font-family: "Work Sans";
    font-size: 16px;
    cursor: pointer;
  }
`;
