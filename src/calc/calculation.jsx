import React, { useEffect, useState } from "react";
import ActionButton from "./actionButton";

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
      </tr>
    </table>
  );
};

const Calculation = (props) => {
  const [subTotal, setSubTotal] = useState(0);
  const [vatTax, setVatTax] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const subTotalValue = props.selectedProduct.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const vatTaxValue = (vatTax / 100) * subTotalValue;
    const discountValue = (discount / 100) * subTotalValue;

    const totalValue = subTotalValue + vatTaxValue - discountValue;
    const safeTotal = isFinite(totalValue) ? totalValue : 0;

    setSubTotal(subTotalValue.toFixed(2));
    setVatTax(vatTaxValue.toFixed(2));
    setDiscount(discountValue.toFixed(2));
    setTotal(safeTotal.toFixed(2));
  }, [props.selectedProduct, vatTax, discount]);
  console.log(vatTax);
  return (
    <>
      <div style={{ borderRadius: "7px" }}>
        <CalcTable
          heading={"sub total"}
          inputType={"text"}
          value={subTotal}
          disabled
        />
        <CalcTable
          heading={"VAT text"}
          inputType={"number"}
          value={vatTax}
          onChange={(e) => {
            setVatTax(e.target.value)
          }}
        />
        <CalcTable
          heading={"discount"}
          inputType={"number"}
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
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
        <ActionButton lable={"Process Sale"} backgroundColor={"#04b344"} />
      </div>
    </>
  );
};

export default Calculation;
