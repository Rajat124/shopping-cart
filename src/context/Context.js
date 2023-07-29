import React, { useContext } from "react";
import { useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer } from "./Reducer";

const Cart = React.createContext();
faker.seed(99);

export const CartState = () => {
  return useContext(Cart);
};

const Context = ({ children }) => {
  const products = [...Array(21)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.avatarGitHub(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;
