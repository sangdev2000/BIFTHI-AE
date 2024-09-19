import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Bố cục của các sản phẩm, căn giữa và chia khoảng cách
const Content = styled.div`
  display: flex;
  justify-content: space-between;
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
    height: auto;
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
      background: #ff98001a;
      color: #ff9800;
    }

    i {
      color: #ff9800;
    }
  }
`;

// Thanh màu đen hiển thị khi hover
const Overlay = styled.div`
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Work Sans";
  font-size: 16px;
  transition: all 0.3s ease;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  margin-top: 10px;

  button {
    color: #292929;
    font-family: "Work Sans";
    font-size: 18px;
    font-weight: bold;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  span {
    font-size: 14px;
    color: #7a7a7a;
  }
`;

const AllProduct = ({ products }) => {
  return (
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
              <ButtonWrapper>
                <button>{price}</button>
              </ButtonWrapper>
              <Overlay className="overlay">Xem chi tiết</Overlay>
            </Link>
          </Box>
        );
      })}
    </Content>
  );
};

export default AllProduct;
