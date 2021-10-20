import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData/products.json";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./shop.css";

const Shop = () => {
  const first20 = fakeData.slice(0, 5);
  const [products, setProducts] = useState(first20);
  useEffect(() => setProducts(fakeData), []);
  //Handle Add Product
  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    setCart([...cart, product]);
    addToDb(product.key);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        <h3 className="text-center">Shop</h3>
        {products.map((product) => (
          <Product
            showAddToCart={true}
            handleAddProduct={handleAddProduct}
            productDetails={product}
            key={product.key}
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
