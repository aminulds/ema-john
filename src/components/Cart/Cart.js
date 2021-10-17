import React from "react";
import "./cart.css";

const Cart = (props) => {
  const cart = props.cart;
  let itemPrice = cart.reduce((total, prd) => total + prd.price, 0).toFixed(2);
  itemPrice = Number(itemPrice);
  let shipping = 0;
  if (itemPrice <= 0) {
    shipping = 0;
  } else if (itemPrice < 100) {
    shipping = 15.99;
  } else if (itemPrice < 300) {
    shipping = 6.99;
  }
  let totalPrice = (itemPrice + shipping).toFixed(2);
  totalPrice = Number(totalPrice);
  let tax = (totalPrice * 0.15).toFixed(2);
  tax = Number(tax);
  const grandTotal = (totalPrice + tax).toFixed(2);

  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>Items ordered: {cart.length}</p>
      <table>
        <tbody>
          <tr>
            <td>Items:</td>
            <td>${itemPrice}</td>
          </tr>
          <tr>
            <td>Shipping & Handling:</td>
            <td>${shipping}</td>
          </tr>
          <tr>
            <td>Total before tax:</td>
            <td>${totalPrice}</td>
          </tr>
          <tr>
            <td>Estimated tax</td>
            <td>${tax}</td>
          </tr>
          <tr className="order-total">
            <td>Order Total</td>
            <td>${grandTotal}</td>
          </tr>
        </tbody>
      </table>
      <a href="/review">
        <button className="btn btn-primary">
          <span>Review your order</span>
        </button>
      </a>
    </div>
  );
};

export default Cart;
