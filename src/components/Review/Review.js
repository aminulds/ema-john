import React, { useEffect, useState } from "react";
import {
  getStoredCart,
  deleteFromDb,
  clearTheCart,
} from "../../utilities/fakedb";
import fakeData from "../../fakeData/products.json";
import CartItem from "../CartItem/CartItem";
import Cart from "../Cart/Cart";
import thankImage from "../../images/giphy.gif";

const Review = () => {
  const [cart, setCart] = useState([]);
  const [placedOrder, setPlacedOrder] = useState(false);
  // place order
  const placeOrder = () => {
    setCart([]);
    setPlacedOrder(true);
    clearTheCart();
  };

  const removeProduct = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    deleteFromDb(productKey);
  };

  useEffect(() => {
    const saveCart = getStoredCart();
    const productKey = Object.keys(saveCart);

    const cartProducts = productKey.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = saveCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);

  let thankU;
  if (placedOrder) {
    thankU = <img src={thankImage} alt="" />;
  }
  return (
    <div className="shop-container">
      <div className="product-container">
        <h3 className="text-center">Cart Preview</h3>
        {cart.map((pd) => (
          <CartItem
            product={pd}
            removeProduct={removeProduct}
            key={pd.key}
          ></CartItem>
        ))}

        {thankU}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={placeOrder} className="btn btn-primary">
            <span>Place Order</span>
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
