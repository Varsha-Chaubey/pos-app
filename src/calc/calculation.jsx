import React, { useEffect, useState } from "react";
import ActionButton from "./actionButton";
import ReceiptModal from "./ReceiptModal";

export const CalcTable = (props) => {
  return (
    <table
      style={{ margin: "0px 10px 0px 22px", backgroundColor: "#fff" }}
      className="calc-table"
    >
      <tr>
        <th
          className="text-capitalize "
          style={{
            textAlign: "justify",
            width: "40%",
            backgroundColor: "#cccccc63",
            paddingLeft: "6px",
          }}
        >
          {props.heading}
        </th>
        <td>
          <input
            type={props.inputType}
            className="input"
            value={props.value}
            onChange={props.onChange}
          />
        </td>
        <td>{props.item}</td>
      </tr>
    </table>
  );
};

const Calculation = (props) => {
  const [subTotal, setSubTotal] = useState(0);
  const [vat, setVat] = useState(0);
  const [disc, setDisc] = useState(0);
  const [vatTax, setVatTax] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const subTotalValue = props.selectedProduct.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const totalValue = subTotalValue + vatTax - discount;
    setSubTotal(subTotalValue);
    setTotal(totalValue);
  }, [props.selectedProduct, vatTax, discount]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  // for total selected product
  var totalItemCount = props.selectedProduct
    ?.map((item) => item.quantity)
    .reduce((a, c) => {
      return a + c;
    }, 0);

  return (
    <>
      <div style={{ borderRadius: "7px" }}>
        <CalcTable
          heading={"sub total"}
          inputType={"text"}
          value={subTotal}
          disabled
          item={`${totalItemCount} items`}
        />
        <CalcTable
          heading={"VAT tax"}
          inputType={"number"}
          value={vat}
          onChange={(e) => {
            console.log(e.target.value, "value");
            setVat(parseFloat(e.target.value));
            setVatTax(parseFloat(e.target.value / 100));
          }}
          item={`${vatTax} EUR`}
        />
        <CalcTable
          heading={"discount"}
          inputType={"number"}
          value={disc}
          onChange={(e) => {
            setDisc(parseFloat(e.target.value));
            setDiscount(parseFloat(e.target.value / 100));
          }}
          item={`${discount} EUR`}
        />
        <CalcTable
          heading={"total"}
          inputType={"text"}
          value={total}
          disabled
        />
      </div>
      <div className="action-btn ">
        <ActionButton
          lable={"Cancel Sale"}
          backgroundColor={"#ff0a0a"}
          onClick={() => {
            const data = [];
            props.setSelectedProduct(data);
          }}
        />
        <ActionButton
          lable={"Process Sale"}
          backgroundColor={"#04b344"}
          onClick={() => {
            if (props.selectedProduct && props.selectedProduct.length) {
              setModalOpen(true);
            } else {
              setModalOpen(false);
            }
          }}
        />
        <ReceiptModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          selectedProduct={props.selectedProduct}
          discount={disc}
          vatTax={vat}
          total={total}
          totalItemCount={totalItemCount}
          setSelectedProduct={props.setSelectedProduct}
        />
      </div>
    </>
  );
};

export default Calculation;
