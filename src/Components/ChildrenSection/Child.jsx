import React from "react";
import style from "./Child.module.scss";

const Child = () => {
  return (
    <div className={style.child}>
      <div className={style.container}>
        <p>Celine Richardson ,12 yeras. old</p>
        <h1>NEEDS A CARRING PARENTS</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed mollitia
          ex eos architecto Lorem ipsum dolor sit amet, consectetur adipisicing.nam, facere magnam quis saepe placeat quasi.
        </span>
        <button>Adopt Her Now!</button>
      </div>
    </div>
  );
};

export default Child;
