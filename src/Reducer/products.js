const initialState = {
  products: [],
  carts: [],
  currentItem: null,
};
const products = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return {
        ...state,
        products: action.payload,
      };
    case "ADD_TO_CART":
      const item = state.products.find((prod) => prod.id === action.payload.id);

      const inCart = state.carts.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        carts: inCart
          ? state.carts.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.carts, { ...item, qty: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        carts: state.carts.filter((item) => item.id !== action.payload.id),
      };
    case "ADJUST_QTY":
      return {
        ...state,
        carts: state.carts.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case "LOAD_CURRENT_ITEM":
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default products;
