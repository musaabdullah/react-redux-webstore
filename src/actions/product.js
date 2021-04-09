import * as api from "../api/product";

export const fetchData = () => async (dispatch) => {
  try {
    const res = await api.fetchData();
    // console.log(res);
    dispatch({ type: "FETCH_ALL", payload: res.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addToCart = (id) => ({
  type: "ADD_TO_CART",
  payload: { id },
});

export const removeFromCart = (itemID) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: {
      id: itemID,
    },
  };
};

export const adjustQty = (itemID, value) => {
  return {
    type: "ADJUST_QTY",
    payload: {
      id: itemID,
      qty: value,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: "LOAD_CURRENT_ITEM",
    payload: item,
  };
};
