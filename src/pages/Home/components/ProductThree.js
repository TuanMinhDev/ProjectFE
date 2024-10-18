import "./product.css";
import React from "react";
const ProductThree = (props) => {
  const renderPrice = () => {
    {
      /* Product price*/
    }
    switch (props.type) {
      case 1:
        return (
          <>
            <span className="text-muted text-decoration-line-through">
              ${props.price1}
            </span>
            <br />
            <span>${props.price2}</span>
          </>
        );
      default:
        return `$${props.price1}`;
    }
  };
  return (
    <div style={{ display: "flex" }}>
      <img
        src={props.image}
        alt={props.name}
        className="img-fluid mb-2"
        style={{ width: "150px", height: "auto" }}
      />
      <div>
        <p>{props.name}</p>
        <p>{renderPrice()}</p>
      </div>
    </div>
  );
};
export default ProductThree;
