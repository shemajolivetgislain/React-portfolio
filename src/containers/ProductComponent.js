import React from "react";
import { useSelector } from "react-redux";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  return (
    <div className="four column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image"></div>
          <div className="content">
            <div className="header">Product Name</div>
            <div className="meta price">$ 12.99</div>
            <div className="meta">Some date</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
