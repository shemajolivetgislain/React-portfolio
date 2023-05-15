import React from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  return (
    
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
