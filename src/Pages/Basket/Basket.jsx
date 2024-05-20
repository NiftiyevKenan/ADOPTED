import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import BasketCard from "../../Components/Card/BasketCard/BasketCard";
import style from "./Basket.module.scss";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const Basket = () => {
  const [products, setProduct] = useState([]);

  const getData = () => {
    axios
      .get("https://664b3125a300e8795d448fab.mockapi.io/basket")
      .then((res) => {
        setProduct(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteBasket = (id) => {
    axios.delete(`https://664b3125a300e8795d448fab.mockapi.io/basket/${id}`);
    setTimeout(() => {
      getData();
    }, 300);
  };

  return (
    <div>
      <Header />
      <div className={style.cards}>
        {products &&
          products.map((item) => (
            <BasketCard item={item} Delete={() => deleteBasket(item.id)} />
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Basket;
