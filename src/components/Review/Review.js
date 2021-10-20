import React, { useEffect, useState } from "react";
import { getStoredCart } from "../../utilities/fakedb";
import fakeData from "../../fakeData/products.json";
import CartItem from "../CartItem/CartItem";

const Review = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saveCart = getStoredCart();
    const productKey = Object.keys(saveCart);

    const cartProducts = productKey.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = saveCart[key];
      return product;
    });
    setCart(cartProducts);
    console.log(productKey);
  }, []);
  return (
    <div>
      <h3 className="text-center">Cart Item {cart.length}</h3>
      {cart.map((pd) => (
        <CartItem product={pd}></CartItem>
      ))}
    </div>
  );
};

export default Review;
