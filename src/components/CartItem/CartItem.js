import React from "react";

const CartItem = (props) => {
  const { name, quantity, price, key } = props.product;
  return (
    <div>
      <h4 className="product-name">{name}</h4>
      <p>Quantity: {quantity}</p>
      <p>Price: ${price}</p>
      <button
        onClick={() => props.removeProduct(key)}
        className="btn btn-warning"
      >
        Remove Item
      </button>
    </div>
  );
};

export default CartItem;
