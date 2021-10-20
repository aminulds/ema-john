import React from "react";
import { useParams } from "react-router";
import fakeData from "../../fakeData/products.json";
import Product from "../Product/Product";

const ProductDetail = () => {
  const { productKey } = useParams();
  const productDetails = fakeData.find((pd) => pd.key === productKey);

  return (
    <div>
      <h3 className="text-center">Product Details</h3>
      <Product showAddToCart={false} productDetails={productDetails}></Product>
    </div>
  );
};

export default ProductDetail;
