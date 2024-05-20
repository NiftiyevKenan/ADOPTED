import React from "react";
import style from "./ProductCard.module.scss";
import Button from "../../Buttons/Button";

const ProductCard = ({ item ,addToCart ,addToWishlist }) => {
  return (
    <div className={style.card}>
      <img src={item.thumbnail} alt={item.title} />
      <p>{item.title}</p>
      <p>{item.description}</p>
      <p>{item.price} Qepik</p>
      <div className={style.btn}>
        <Button onclick={addToCart} text="CART" />
        <Button onclick={addToWishlist} text="WISHLIST" />
      </div>
    </div>
  );
};

export default ProductCard;
