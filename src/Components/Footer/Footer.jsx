import React from "react";
import style from "./Footer.module.scss";
import { CiHeart } from "react-icons/ci";

const Footer = () => {
  return (
    <div className={style.footer}>
      <p>
        Copyright ©2024 All rights reserved | This template is made with{" "}
        <CiHeart />
        by <a href="">Colorlib</a>
      </p>
    </div>
  );
};

export default Footer;
