import React from "react";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import Filter from "./Filter";
import "./Style.css";

const Home = () => {
  const {
    state: { products },
    productState: { searchQuery, byStock, byFastDelivery, sort, byRating },
  } = CartState();

  const transFormProduct = () => {
    let sortedProduct = products;
    if (sort) {
      sortedProduct = sortedProduct.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProduct = sortedProduct.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProduct = sortedProduct.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProduct = sortedProduct.filter((prod) => prod.ratings >= byRating);
    }

    if (searchQuery) {
      sortedProduct = sortedProduct.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProduct;
  };

  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {transFormProduct().map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
