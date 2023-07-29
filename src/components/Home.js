import React from "react";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import Filter from "./Filter";
import "./Style.css";

const Home = () => {
  const { state } = CartState();
  const product = state.products;

  console.log(state.products);

  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {product.map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
