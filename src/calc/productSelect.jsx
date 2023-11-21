import React from "react";
import remove from "./../assets/images/close-24x24.svg";
import plus from "./../assets/images/plus.svg";
import minus from "./../assets/images/minus.svg";
const ProductSelect = (props) => {
  const handleRemoveProduct = (productId) => {
    const updatedCart = props.selectedProduct.filter(
      (item) => item.id !== productId
    );
    props.setSelectedProduct(updatedCart);
  };

  return (
    <>
      {props.selectedProduct && props.selectedProduct.length >= 1 ? (
        <>
          <table class="product-table">
            {props.selectedProduct &&
              props.selectedProduct.map((item, idx) => {
                return (
                  <tr>
                    <td
                      style={{ width: "8%" }}
                      onClick={() => handleRemoveProduct(item.id)}
                      className="cursor-pointer"
                    >
                      <img src={remove} alt="close" className="crose-icon" />
                    </td>
                    <td style={{ width: "30%" }} className="text-capitalize">
                      {item.name}
                    </td>
                    <td style={{ width: "20%" }} className="">
                      {item.price}
                    </td>
                    <td style={{ width: "5%" }} className="cursor-pointer">
                      <img src={minus} alt="close" className="plus-icon" />
                    </td>
                    <td style={{ width: "2%" }}>{item.quantity}</td>
                    <td style={{ width: "11%" }} className="cursor-pointer">
                      <img src={plus} alt="close" className="plus-icon" />
                    </td>
                    <td style={{ width: "18%" }}>
                      {item.price * item.quantity}
                    </td>
                  </tr>
                );
              })}
          </table>
        </>
      ) : (
        <div className="no-product-container">
          <p className="text-uppercase text text-center">
            There are no products
          </p>
        </div>
      )}
    </>
  );
};

export default ProductSelect;
