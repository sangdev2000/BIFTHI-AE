import React, {  useState } from "react";
import { useParams } from "react-router-dom";
import { list } from "../data/Data";
import "./ProductDetail.css";
import styled from "styled-components";
const ProductDetail = () => {
  const { id } = useParams();
  const [showimage, setShowimage] = useState(null);
  const product = list.find((item) => item.id === parseInt(id));
  // const [car, setCar] = useState([])
  // const {car, setCar} = useContext(Crecontext)
  console.log("image", showimage);
  const handleshow = (img) => {
    setShowimage(img);
  };
  if (!product) {
    return <h2>Product not found!</h2>;
  }
  // const handleAddToCart = (productId) => {
  //   setCar([...car, productId]); 
  //   console.log("Product added to cart:", productId);
  // };
  return (
    <Wapper>
      <div className="product-detail-page" id="conten-a">
        <div className="product-top">
          <div className="product-thumbnails">
            {product.images.map((img, index) => (
              <img
                style={{ margin: "10px" }}
                key={index}
                src={img}
                alt={`thumbnail-${index}`}
                onClick={() => handleshow(img)}
              />
            ))}
          </div>
          <div>
            {showimage ? (
              <img
                className="product-main-image"
                src={showimage}
                alt={product.name}
              />
            ) : (
              <img
                className="product-main-image"
                src={product.images[0]}
                alt={product.name}
              />
            )}
          </div>
          <div className="product-main">
            <div className="product-info">
              <h1>{product.name}</h1>
              <p className="price">Price: {product.price}</p>

              <div className="ratings">
                <span>⭐⭐⭐⭐⭐</span>
                <span>{product.reviews} Customer Reviews</span>
              </div>

              <p className="description-short">{product.shortDescription}</p>

              <div className="color-options">
                <label>Color</label>
                <div className="colors">
                  {product.colors.map((color, index) => (
                    <span
                      key={index}
                      className="color-circle"
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>
              </div>
              <div></div>
              {/* <WpperCar>
                <img src={addcar} />
                <ButonTocar onClick={()=> handleAddToCart(product)}>
                  <h1>add to car</h1>
                </ButonTocar>
              </WpperCar> */}
              <div className="product-details">
                <p>Mã: {product.sku}</p>
                <p>Danh Mục: {product.category}</p>
                <p>Tags: {product.tags.join(", ")}</p>
              </div>

              <div className="social-share">
                <span>Share:</span>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="product-bottom">
          <div className="tabs">
            <button className="active-tab">Description</button>
            <button>Additional Information</button>
            <button>Reviews ({product.reviews})</button>
          </div>

          <div className="tab-content">
            <p>{product.longDescription}</p>
          </div>
   
          <div className="related-images">
            {product.relatedImages.map((img, index) => (
              <div key={index} className="related-image-wrapper">
                <img key={index} src={img} alt={`thumbnail-${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wapper>
  );
};

export default ProductDetail;
const Wapper = styled.div`
  padding-top: 60px;
  @media screen and (min-width: 320px) and (max-width: 460px) {
    #conten-a {
      flex-wrap: wrap;
    }
  }
`;
// const WpperCar = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 20px;
// `;
// const ButonTocar = styled.div`
//   border: 1px solid #000;
//   width: 200px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 5px;
//   h1 {
//     color: #000;
//     text-align: center;
//     font-family: "Work Sans";
//     font-size: 18px;
//     font-style: normal;
//     font-weight: 500;
//     line-height: normal;
//     cursor: pointer;
//   }
// `;
