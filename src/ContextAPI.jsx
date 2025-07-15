import { createContext, useReducer } from "react";
import { faker } from "@faker-js/faker";

import Cartreducer, { ProductReducer } from "./Reducer";
import { useContext } from "react";



const Cart = createContext();

const CartContext = ({ children }) => {
  const product = [...Array(20)].map(() => {
    return {
      product_id: faker.number.bigInt(),
      product_Name: faker.commerce.productName(),
      product_rating: [1, 2, 3, 4, 5][Math.floor(Math.random() * 5)],
      product_price: Math.floor(Number(faker.commerce.price())),
      product_Image: faker.image.url(),
      product_InStock: [0, 6, 4, 9, 3][Math.floor(Math.random() * 5)],
      product_Type: faker.datatype.boolean(),
    };
  });

  const [state, dispatch] = useReducer(Cartreducer, {
    product: product,
    cart: [],
  });

  const [product_filter, dispatchfilter] = useReducer(ProductReducer, {

    productrating: 0,
    productInStock: false,
    productType: false,
    productsearchQuery: "",
    sort: false
  });

  return (
    <Cart.Provider value={{ state, dispatch, product_filter, dispatchfilter }}>
      {children}
    </Cart.Provider>
  );
};

export default CartContext;

export const CartState = () => {
  return useContext(Cart);
};
