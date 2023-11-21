import React, { useState } from "react";
import "./assets/css/index.css";
import ProductList from "./product/productList";
import ProductSelect from "./calc/productSelect";
import { productsData } from "./data/product";
const LandingPage = () => {
  const [product, setProduct] = useState(productsData);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const handleAddProduct = (product) => {
    console.log(product, "jsdfdsh");
    const existingProductIndex = selectedProduct.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex !== -1) {
      // If the product is already in the cart, increase the quantity
      const updatedCart = [...selectedProduct];
      updatedCart[existingProductIndex].quantity += 1;
      setSelectedProduct(updatedCart);
    } else {
      // If the product is not in the cart, add it with quantity 1
      setSelectedProduct([...selectedProduct, { ...product, quantity: 1 }]);
    }
  };
  return (
    <>
      <div className="body-div">
        <div className="landing-container">
          <div className="calc-div">
            <div className="d-flex text-uppercase justify-content-center">
              <h4 className="h-margin">Products</h4>
              <h4 className="h-margin">Price</h4>
              <h4 className="h-margin">Quantity</h4>
              <h4 className="h-margin">total</h4>
            </div>
            <ProductSelect
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              onAddProduct={handleAddProduct}
            />
          </div>
          <div className="product-div">
            <ProductList
              product={product}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              onAddProduct={handleAddProduct}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
