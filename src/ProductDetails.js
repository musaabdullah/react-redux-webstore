import React from "react";

import { useSelector } from "react-redux";

function ProductDetails() {
  const state = useSelector((state) => state.product);

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <img src={state.currentItem.image} alt="" />
        </div>
        {state.currentItem && (
          <div className="card-body" style={{ padding: 10, height: "800px" }}>
            <div className="card-title">{state.currentItem.title}</div>
            <div className="card-price">{state.currentItem.price}</div>
            <div className="card-description">
              {state.currentItem.description}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
