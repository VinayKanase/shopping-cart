import React, { useEffect, useState } from "react";
import "../css/Cart.css";
import { Link } from "react-router-dom";
import {
  getCartProducts,
  increamentProductCount,
  decreamentProductCount,
} from "../api";
function Cart() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  useEffect(() => {
    setProducts(getCartProducts());
    setTotalProducts(totalProductsLength());
    setTotalPrice(gettotalPrice());
  }, [totalProducts]);
  function gettotalPrice() {
    let totalPrice = 0;
    products.forEach((product) => {
      return (totalPrice +=
        product.count * parseInt(product.price.slice(2).replaceAll(",", "")));
    });
    return totalPrice;
  }
  function totalProductsLength() {
    let totalProducts = 0;
    products.forEach((product) => (totalProducts += product.count));
    return totalProducts;
  }
  function onClickIncreament(e) {
    increamentProductCount(e.target.dataset.id);
    setTotalProducts(totalProducts + 1);
  }
  function onClickDecreament(e) {
    decreamentProductCount(e.target.dataset.id);
    if (totalProducts <= 0) return;
    setTotalProducts(totalProducts - 1);
  }
  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="cart__list">
        {products.map((product) => {
          return (
            <div className="cart__product">
              <Link to={`/shop/${product.id}`}>
                <div className="img__banner">
                  <img src={product.images[0]} alt="Not Found" />
                </div>
              </Link>
              <div className="product__details__wrapper">
                <Link to={`/shop/${product.id}`}>
                  <div className="product__name">{product.name}</div>
                  <div className="product__price">{product.price}</div>
                </Link>
                <div className="cart__count">
                  <button
                    className="btn"
                    data-id={product.id}
                    onClick={onClickDecreament}
                  >
                    -
                  </button>
                  <div className="count">{product.count}</div>
                  <button
                    className="btn"
                    data-id={product.id}
                    onClick={onClickIncreament}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="total">
        <div className="total__wrapper">
          <div className="cart__totalPrice">
            Total: <span>₹ {totalPrice || gettotalPrice()}</span>
          </div>
          <div className="cart__totalProducts">
            Total Products:{" "}
            <span>{totalProducts || totalProductsLength()}</span>
          </div>
        </div>
        <button className="btn inactive">Buy Now</button>
      </div>
    </div>
  );
}

export default Cart;
