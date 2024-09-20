import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { list } from "../data/Data";
import "./ProductDetail.css";
import styled from "styled-components";
import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
import instagram from "../images/instagram.png"
const ProductDetail = () => {
  const { id } = useParams();
  const [showimage, setShowimage] = useState(null);
  const product = list.find((item) => item.id === parseInt(id));
  console.log("image", showimage);
  const handleshow = (img) => {
    setShowimage(img);
  };
  if (!product) {
    return <h2>Product not found!</h2>;
  }

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

              <div className="product-details">
                <p>Id: {product.sku}</p>
                <p>Category: {product.category}</p>
                <p>Tags: {product.tags.join(", ")}</p>
              </div>

              <div className="social-share">
                <span>Share:</span>
                <Icon><img src={facebook}/></Icon>
                <Icon><img src={twitter}/></Icon>
                <Icon><img src={instagram}/></Icon>
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

          <h2 className="related-title">Related products</h2>
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
const Icon = styled.div`
  img{
    width: 100%;
  }
  display: flex;
  align-items: center;`
