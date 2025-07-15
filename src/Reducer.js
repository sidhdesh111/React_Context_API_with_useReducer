const Cartreducer = (state, action) => {
  switch (action.type) {
    case "Add_to_cart":
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...action.payload,
            qty: 1,
          },
        ],
      };
    case "Remove_from_cart":
      return {
        ...state,
        cart: state.cart.filter(
          (ele) => ele.product_id !== action.payload.product_id
        ),
      };

    case "Change_qty":
      return {
        ...state,
        cart: state.cart.map((ele) =>
          ele.product_id === action.payload.id
            ? { ...ele, qty: Number(action.payload.qty) }
            : ele
        ),
      };

    default:
      return state;
  }
};

export default Cartreducer;

export const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "FILTER_STOCK":
      return { ...state, productInStock: !state.productInStock };
    case "FILTER_BYTYPE":
      return { ...state, productType: !state.productType };
    case "FILTER_BYRATING":
      return { ...state, productrating: action.payload };
    case "FILTER_BYSEARCH":
      return { ...state, productsearchQuery: action.payload };
    case "RESET_FILTER":
      return {
        productrating: 0,
        productInStock: false,
        productType: false,
        productsearchQuery: "",
        sort: false,
      };
    default:
      return state;
  }
};
