import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./Wishlist.module.scss";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import BasketCard from "../../Components/Card/BasketCard/BasketCard";

const Wishlist = () => {
  const [products, setProduct] = useState([]);

  const getData = () => {
    axios
      .get("https://664b3125a300e8795d448fab.mockapi.io/wishlist")
      .then((res) => {
        setProduct(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteWishlist = (id) => {
    axios.delete(`https://664b3125a300e8795d448fab.mockapi.io/wishlist/${id}`);
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
            <BasketCard item={item} Delete={() => deleteWishlist(item.id)} />
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
