import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData/products.json";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./shop.css";
import { Link } from "react-router-dom";

const Shop = () => {
  const first20 = fakeData.slice(0, 5);
  const [products, setProducts] = useState(first20);
  useEffect(() => setProducts(fakeData), []);
  //Handle Add Product
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = getStoredCart();
    const productKeys = Object.keys(savedCart);
    const previousCart = productKeys.map((existingKey) => {
      const product = fakeData.find((pd) => pd.key === existingKey);
      product.quantity = savedCart[existingKey];
      return product;
    });
    setCart(previousCart);
  }, []);

  const handleAddProduct = (product) => {
    const toBeAddedKey = product.key;
    const sameProduct = cart.find((pd) => pd.key === toBeAddedKey);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd.key !== toBeAddedKey);
      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
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
        <Cart cart={cart}>
          <Link to="/review">
            <button className="btn btn-primary">
              <span>Review order</span>
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
