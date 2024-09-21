import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa"; // Import icon Check
import { Crecontext } from "../providertocar";

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const { car, setCar } = useContext(Crecontext);

  useEffect(() => {
    // Lấy dữ liệu wishlist từ localStorage khi trang được load
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlistItems(JSON.parse(savedWishlist));
    }
  }, []);

  console.log("nguyen", car);

  const handleRemoveFromWishlist = (id) => {
    setCar((prevCar) => prevCar.filter((item) => item.id !== id));
  };

  return (
    <WishlistContainer>
      <TitleSection>
        <h1>Wishlist</h1>
        <Breadcrumb>
          <a href="/">Home</a> / <span>Wishlist</span>
        </Breadcrumb>
      </TitleSection>
      <ContainerTables>
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
            {car?.map((item) => (
              <tr key={item.id}>
                <td
                  className="remove-btn"
                  onClick={() => handleRemoveFromWishlist(item.id)}
                >
                  &times;
                </td>
                <td className="product-info">
                  <img src={item.cover} alt={item.name} />
                  <span>{item.name}</span>
                </td>
                <td className="price">{item.price}</td>
                <td className="stock-status">
                  <td style={{ display: "flex", alignItems: "center" }}>
                    <FaCheck className="in-stock-icon"></FaCheck>In stock
                  </td>
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </WishlistTable>
        
        <WishlistTablee>
  <thead>
    <tr>
      <div className="nio-q"><th><p>Product Details</p></th></div>
    </tr>
  </thead>
  <tbody>
    {car?.map((item) => (
      <tr key={item.id}>
        <td className="remove-btn" onClick={() => handleRemoveFromWishlist(item.id)}>
          &times;
        </td>
        <td className="product-details">
          <div className="product-info">
       
         

          </div>
          <div className="price-stock">
        
          <tr><div className="imt-f"><img  src={item.cover} alt={item.name} /></div></tr>
          <span className="price">{item.price}</span><br/>
          <span>{item.name}</span>
         
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</WishlistTablee>
      </ContainerTables>
    </WishlistContainer>
  );
};

export default WishlistPage;

// Styled Components
const WishlistContainer = styled.div`
  margin: 0 auto;
  padding: 50px 20px;
  overflow: hidden;
  width: 100%;
  max-width: 1440px;
`;
const WishlistTablee = styled.div`
width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  @media screen and (min-width: 860px) {
    display: none;
  }
  .nio-q{
    background: #fff;

@media screen and (min-width: 320px) and (max-width: 460px) {
  p{
    text-align: center;
    font-size: 14px;
  }
}
  }
.imt-f{
  @media screen and (min-width: 320px) and (max-width: 860px) {
      img{
        width: 80px;
        height: 80px;
      }
  }
}
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
  table-layout: fixed;

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
  @media screen and (min-width: 320px) and (max-width: 860px) {
    display: none;
  }
`;

const ContainerTables = styled.div`
  width: 100%;
  overflow-x: auto; 
  @media screen and (max-width: 760px) {
    overflow-x: auto;
  }
`;
