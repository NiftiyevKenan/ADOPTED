import React from "react";
import style from "./BasketCard.module.scss";
import Button from '../../Buttons/Button'

const BasketCard = ({ Delete ,item}) => {
  return (
    <div className={style.card}>
      <img src={item.thumbnail} alt={item.title} />
      <p>{item.title}</p>
      <p>{item.description}</p>
      <p>{item.price} Qepik</p>
      <div className={style.btn}>
        <Button onclick={Delete} text="Delete" />
      </div>
    </div>
  );
};

export default BasketCard;