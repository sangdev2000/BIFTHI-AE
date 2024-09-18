import React from "react";
import { useParams } from "react-router-dom";
import { list } from "../data/Data"; // Import dữ liệu sản phẩm
import "./ProductDetail.css"

const ProductDetail = () => {
    const { id } = useParams(); // Extract product ID from URL
    const product = list.find((item) => item.id === parseInt(id)); // Find product by ID
  
    if (!product) {
      return <h2>Product not found!</h2>;
    }
  
    return (
      <div className="product-detail-page">
        <div className="product-top">
          <div className="product-thumbnails">
            {product.images.map((img, index) => (
              <img key={index} src={img} alt={`thumbnail-${index}`} />
            ))}
          </div>
  
          <div className="product-main">
            <img className="product-main-image" src={product.images[0]} alt={product.name} />
            <div className="product-info">
              <h1>{product.name}</h1>
              <p className="price">Rs. {product.price}</p>
  
              <div className="ratings">
                <span>⭐⭐⭐⭐⭐</span>
                <span>{product.reviews} Customer Reviews</span>
              </div>
  
              <p className="description-short">{product.shortDescription}</p>
  
              <div className="color-options">
                <label>Color</label>
                <div className="colors">
                  {product.colors.map((color, index) => (
                    <span key={index} className="color-circle" style={{ backgroundColor: color }}></span>
                  ))}
                </div>
              </div>
  
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
  
  <h2 className="related-title">Sản phẩm liên quan</h2>
</div>
      </div>
    );
  };
  
  export default ProductDetail;