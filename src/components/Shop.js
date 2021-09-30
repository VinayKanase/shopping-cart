import React, { useState } from "react";
import "../css/Shop.css";
import { getRandomProducts } from "../api";
import { Link } from "react-router-dom";
function Shop() {
  const [LaptopCount, setLaptopCount] = useState(3);
  const [AccessoriesCount, setAccessoriesCount] = useState(3);
  return (
    <div className="shop">
      <div className="shop__wrapper">
        <div className="shop__category">
          <h2>Laptops</h2>
          <div className="seeAll" onClick={() => setLaptopCount(10)}>
            See All
          </div>
        </div>
        <div className="row">
          {getRandomProducts(LaptopCount, "laptops").map((product, i) => (
            <Link to={`/shop/${product.id}`}>
              <div className="shop__card" key={i}>
                <img src={product.images[0]} alt="Not Found" />
                <div className="info">
                  <div className="product__name">{product.name}</div>
                  <div className="product__price">{product.price}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="shop__wrapper">
        <div className="shop__category">
          <h2>Accessories</h2>
          <div className="seeAll" onClick={() => setAccessoriesCount(13)}>
            See All
          </div>
        </div>
        <div className="row">
          {getRandomProducts(AccessoriesCount, "accessories").map(
            (product, i) => (
              <Link to={`/shop/${product.id}`}>
                <div className="shop__card" key={i}>
                  <img src={product.images[0]} alt="Not Found" />
                  <div className="info">
                    <div className="product__name">{product.name}</div>
                    <div className="product__price">{product.price}</div>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;
