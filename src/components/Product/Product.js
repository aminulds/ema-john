import React from "react";
import "./product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = (props) => {
  // console.log(props.productDetails.key);
  const { img, name, seller, price, stock, key } = props.productDetails;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-Details">
        <h4 className="product-name">
          <Link to={"/product/" + key}>{name}</Link>
        </h4>
        <div className="description">
          <div>
            <small>by: {seller}</small>
            <p>${price}</p>
            <p>
              <small>only {stock} left in stock - order soon</small>
            </p>
            {props.showAddToCart && (
              <button
                onClick={() => props.handleAddProduct(props.productDetails)}
                className="btn btn-success"
              >
                <FontAwesomeIcon icon={faShoppingCart} /> add to cart
              </button>
            )}
          </div>
          <div>Feature</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
