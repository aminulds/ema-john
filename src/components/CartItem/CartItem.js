import React from "react";

const CartItem = (props) => {
  const { name, quantity } = props.product;
  return (
    <div>
      <h4 className="product-name">{name}</h4>
      <p>Quantity: {quantity}</p>
      <button className="btn btn-warning">Remove Item</button>
    </div>
  );
};

export default CartItem;
