import React, { useEffect, useState } from "react";
import style from "./ConsolCard.module.scss";
import Button from "../../Buttons/Button";

const ConsolCard = ({ item , Delete }) => {
  return (
    <div className={style.card}>
      <img src={item.thumbnail} alt={item.title} />
      <p>{item.title}</p>
      <p>{item.price} Qepik</p>
      <Button onclick={Delete} text="Delete" />
    </div>
  );
};

export default ConsolCard;
