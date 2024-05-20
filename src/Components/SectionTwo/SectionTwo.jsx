import React from "react";
import style from "./SectionTwo.module.scss";
import child from "../../assets/images/children_2.jpg";
const SectionTwo = () => {
  return (
    <div className={style.page}>
      <div className={style.container}>
        <div className={style.image}>
          <img src={child} alt="Childiren" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nemo
            et, esse laudantium consequatur. Eum soluta illum architecto dolorum
            quae suscipit dignissimos! Saepe, amet explicabo nemo eligendi totam
            sint repudiandae.
          </p>
          <button>Adopt a Child Now</button>
        </div>
        <div className={style.steps}>
          <div className={style.container}>
            <h1>Steps to adopt & foster a child</h1>
            <div className={style.btn}>
              <button>1. Getting Started</button>
              <button>2. Getting Started</button>
              <button>3. Getting Started</button>
              <button>4. Getting Started</button>
              <button>5. Getting Started</button>
              <button>6. Getting Started</button>
              <button>7. Getting Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
