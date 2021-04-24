import React, { useEffect } from "react";
import { removeFromCart, adjustQty } from "./actions/product";
import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  CartItem,
  CartImg,
  CartDetails,
  CartTitle,
  CartBtn,
  CartRemove,
} from "./style";
function Cart({ item }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue(item.qty);
  }, [item]);
  return (
    <CartItem>
      <CartImg src={item.image} />
      <CartDetails>
        <CartTitle>{item.title}</CartTitle>
        <CartBtn>
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              dispatch(adjustQty(item.id, e.target.value));
            }}
            style={{ width: 50 }}
            type="number"
          />
        </CartBtn>
        <CartRemove onClick={() => dispatch(removeFromCart(item.id))}>
          Remove
        </CartRemove>
      </CartDetails>
    </CartItem>
  );
}

export default Cart;
