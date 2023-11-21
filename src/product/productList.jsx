import React from "react";

const ProductList = (props) => {
   console.log(props.selectedProduct);
  return (
    <div className="container">
      {props.product &&
        props.product.length &&
        props.product.map((item, idx) => {
          return (
            <div
              className={`product-card ${
                props.selectedProduct === item ? "selected" : ""
              }`}
              onClick={() => props.onAddProduct({ ...item })}
              key={idx}
            >
              <div className="product-image-container">
                <img
                  src={item.image}
                  alt={item.name}
                  className="product-image"
                />
                <div className="product-name-overlay">
                  <h3 className="product-name">{item.name}</h3>
                  <div className="product-info-overlay">
                    <p className="product-price">{`Price: $${item.price}`}</p>
                    <p className="product-description">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductList;
