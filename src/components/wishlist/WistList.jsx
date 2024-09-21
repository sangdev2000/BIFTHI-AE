import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa"; // Icon để đóng modal
import { Link } from "react-router-dom"; // Import Link để sử dụng điều hướng

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background-color: white;
  width: 700px;
  max-width: 90%;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 20px;

  h2 {
    font-size: 22px;
    font-weight: 600;
  }

  .close-icon {
    cursor: pointer;
    font-size: 22px;
    color: #000;
    background-color: #f3f3f3;
    border-radius: 50%;
    padding: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e0e0e0;
    }
  }
`;

const ProductList = styled.div`
  max-height: 400px;
  overflow-y: auto;

  .product-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid #e0e0e0;
    font-size: 16px;

    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 4px;
    }

    .product-info {
      flex: 1;
      margin-left: 20px;
      text-align: left;

      h4 {
        font-size: 16px;
        font-weight: 500;
        margin: 0;
      }

      span {
        font-size: 14px;
        color: #999;
      }
    }

    .price-and-cart {
      display: flex;
      align-items: center;
      gap: 80px; /* Khoảng cách giữa giá và nút Add to cart */
    }

    .price {
      font-size: 18px;
      font-weight: 600;
      color: #666;
    }

    .remove-btn {
      cursor: pointer;
      color: #999;
      transition: color 0.2s;
      font-size: 18px;
      margin-right: 10px; /* Căn chỉnh nút xóa ở bên trái */

      &:hover {
        color: #000;
      }
    }

    .cart-btn {
      background-color: #333;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      font-size: 14px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #555;
      }
    }
  }
`;
const StyledLink = styled(Link)`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none; /* Xóa gạch chân */
  transition: background-color 0.2s;
  display: inline-block; /* Đảm bảo nó giống button */
  text-align: center;

  &:hover {
    background-color: #555;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  button {
    background-color: #333;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #555;
    }
  }

  .continue-shopping {
    background-color: transparent;
    color: #333;
    border: 1px solid #333;

    &:hover {
      background-color: #333;
      color: white;
    }
  }
`;

const Wishlist = ({ wishlistItems, onClose, onRemoveItem }) => {
  return (
    <Overlay>
      <Modal>
        <Header>
          <h2>Wishlist ({wishlistItems.length})</h2>
          <FaTimes className="close-icon" onClick={onClose} />
        </Header>
        <ProductList>
          {wishlistItems.map((item) => (
            <div className="product-item" key={item.id}>
              <FaTimes
                className="remove-btn"
                onClick={() => onRemoveItem(item.id)} // Xóa sản phẩm khỏi wishlist
              />
              <img src={item.cover} alt={item.name} />
              <div className="product-info">
                <h4>{item.name}</h4>
                <span>{item.category}</span>
              </div>
              <div className="price-and-cart">
                <div className="price">{item.price}</div>
              </div>
            </div>
          ))}
        </ProductList>
        <ActionButtons>
          <StyledLink to="/wishlist">Open wishlist page</StyledLink>
          <button className="continue-shopping" onClick={onClose}>
            Continue shopping
          </button>
        </ActionButtons>
      </Modal>
    </Overlay>
  );
};

export default Wishlist;
