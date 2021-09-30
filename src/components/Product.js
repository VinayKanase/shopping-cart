import React, { useEffect, useState } from "react";
import { getProductById, addToCart } from "../api";

function Product({ match }) {
  const [product, setProduct] = useState({
    images: [""],
  });

  const [image, setImage] = useState("");
  useEffect(() => {
    setProduct(
      getProductById(match.params.id) || {
        images: [""],
      }
    );
  }, [match.params.id]);
  function ChangeImage(e) {
    setImage(e.target.src);
  }
  return (
    <div className="product">
      <div className="product__images">
        <div className="img_list">
          {product.images.map((imgLink, i) => (
            <img
              src={imgLink}
              alt="Not Found"
              key={i}
              onMouseEnter={ChangeImage}
            />
          ))}
        </div>
        <img src={image || product.images[0]} alt="Not Found" />
      </div>
      <div className="product__details">
        <div className="product__name">
          {product.name || "An error has occured"}
        </div>
        <div className="product__price">
          {product.price || "An error has occured"}
        </div>
        <div className="btn" onClick={() => addToCart(product)}>
          Add To Cart
        </div>
      </div>
    </div>
  );
}

export default Product;
