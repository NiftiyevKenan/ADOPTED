import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Child from "../../Components/ChildrenSection/Child";
import SectionTwo from "../../Components/SectionTwo/SectionTwo";
import axios from "axios";
import ProductCard from "../../Components/Card/ProductCard/ProductCard";
import style from "./Home.module.scss";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const [product, setProduct] = useState([]);

  const getData = () => {
    axios.get("https://dummyjson.com/products?limit=6").then((res) => {
      setProduct(res.data.products);
    });
  };

  const addToCart = (item) => {
    axios.post('https://664b3125a300e8795d448fab.mockapi.io/basket' ,item );
  };

  const addToWishlist = (item) => {
    axios.post('https://664b3125a300e8795d448fab.mockapi.io/wishlist' ,item );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header />
      <Child />
      <SectionTwo />
      <div className={style.cards}>
        {product &&
          product.map((item) => (
            <ProductCard item={item} addToCart={() => addToCart(item)} addToWishlist={() => addToWishlist(item)}/>
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
