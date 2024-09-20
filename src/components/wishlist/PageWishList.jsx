import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa"; // Import icon Check

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    // Lấy dữ liệu wishlist từ localStorage khi trang được load
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlistItems(JSON.parse(savedWishlist));
    }
  }, []);

  const handleRemoveItem = (id) => {
    const updatedWishlist = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updatedWishlist);
    // Cập nhật lại localStorage
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const handleAddToCart = (item) => {
    alert(`Added ${item.name} to cart`);
  };

  return (
    <WishlistContainer>
      <TitleSection>
        <h1>Wishlist</h1>
        <Breadcrumb>
          <a href="/">Home</a> / <span>Wishlist</span>
        </Breadcrumb>
      </TitleSection>
      <WishlistTable>
        <thead>
          <tr>
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th>Stock status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {wishlistItems.map((item) => (
            <tr key={item.id}>
              <td
                className="remove-btn"
                onClick={() => handleRemoveItem(item.id)}
              >
                &times;
              </td>
              <td className="product-info">
                <img src={item.cover} alt={item.name} />
                <span>{item.name}</span>
              </td>
              <td className="price">{item.price}</td>
              <td className="stock-status">
                <FaCheck className="in-stock-icon" />
                In stock
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </WishlistTable>
    </WishlistContainer>
  );
};

export default WishlistPage;

// Styled Components
const WishlistContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px;
`;

const TitleSection = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-size: 36px;
    font-weight: 600;
    color: #333;
    margin-top: 60px;
  }
`;

const Breadcrumb = styled.div`
  margin-top: 10px;
  color: #999;
  font-size: 14px;

  a {
    color: #333;
    text-decoration: none;
  }
`;

const WishlistTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    background-color: #f7f7f7;
    text-align: left;
    font-weight: 600;

    th {
      padding: 15px;
      font-size: 16px;
      color: #666;
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid #f0f0f0;

      .remove-btn {
        color: #999;
        cursor: pointer;
        font-size: 20px;
        text-align: center;
      }

      .product-info {
        display: flex;
        align-items: center;

        img {
          width: 60px;
          height: 60px;
          object-fit: cover;
          margin-right: 20px;
          border-radius: 4px;
        }

        span {
          font-size: 16px;
          color: #333;
        }
      }

      .price {
        font-size: 16px;
        color: #b69f7d;
        font-weight: 600;
      }

      .stock-status {
        color: #3bba41;
        display: flex;
        align-items: center;

        .in-stock-icon {
          margin-right: 8px;
        }
      }

      .add-to-cart {
        background-color: #333;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s ease;

        &:hover {
          background-color: #555;
        }
      }
    }
  }
`;
