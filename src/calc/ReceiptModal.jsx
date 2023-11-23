import React from "react";
import ActionButton from "./actionButton";
const ReceiptModal = (props) => {
  if (!props.isOpen) {
    return null;
  }
  const currentDate = new Date();
  const formattedDateTime = currentDate.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  return (
    <div className="modal-overlay" onClick={props.closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h4 className="receipt-h">Receipt</h4>

        <div style={{ padding: "25px", color: "#545252" }}>
          <h5 className="text-center m-0 font-14">Sale No... 00102</h5>
          <div className="d-flex">
            <p
              className="m-0 font-12"
              style={{ marginRight: "5px", fontWeight: "bold" }}
            >
              Date:
            </p>
            <p className="m-0 font-12">{formattedDateTime}</p>
          </div>
          <table className="r-heading-table">
            <tr>
              <th>#</th>
              <th>Products</th>
              <th>Quantity</th>
              <th>Sub Total</th>
            </tr>
            {props.selectedProduct &&
              props.selectedProduct.map((item, idx) => {
                return (
                  <>
                    <tr className="text-center">
                      <td className="text-capitalize">{item.id}</td>
                      <td className="">{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price * item.quantity}</td>
                    </tr>
                  </>
                );
              })}
          </table>
          <div style={{borderBottom:"2px solid #ccc", paddingBottom:"30px"}}>
            <table style={{ width: "100%", marginTop: "25px" }}>
              <tr>
                <th>total items</th>
                <td>{props.totalItemCount}</td>
                <th>total </th>
                <td>{props.total}</td>
              </tr>
              <tr>
                <th></th>
                <td></td>
                <th>Discount </th>
                <td>
                  {props.discount} {"%"}
                </td>
              </tr>
              <tr>
                <th></th>
                <td></td>
                <th>VAT </th>
                <td>
                  {props.discount} {"%"}
                </td>
              </tr>
            </table>
          </div>
          <div style={{marginTop:"20px"}}>
            <ActionButton
              onClick={() => {
                const data = [];
                props.setSelectedProduct(data);
                props.closeModal();
              }}
              lable={"Close"}
              width={"300px"}
              height={"40px"}
              color={"#111"}
              border={"1px solid #ccc"}
              borderRadius={"4px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptModal;
