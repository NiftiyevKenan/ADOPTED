import React from "react";
import style from "./Header.module.scss";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigation = useNavigate();

  const getHome = () => {
    navigation("/");
  };

  const getBasket = () => {
    navigation("/basket");
  };

  const getWishlist = () => {
    navigation("/wishlist");
  };

  const getConsol = () => {
    navigation("/consol");
  };

  return (
    <div className={style.header}>
      <div className={style.headerTop}>
        <div className={style.container}>
          <div className={style.icons}>
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
          <div className={style.log}>
            <div className={style.sponsor}>
              <a href="">Sponsor</a>
            </div>
            <div className={style.login}>
              <a href="">Login</a>
            </div>
          </div>
        </div>
      </div>
      <div className={style.headerBottom}>
        <div className={style.container}>
          <div className={style.title}>
            <h1>ADOPTED</h1>
          </div>
          <div className={style.nav}>
            <ul>
              <li>
                <a href="" onClick={getHome}>
                  Home
                </a>
              </li>
              <li>
                <a href="">
                  Adoption <IoMdArrowDropdown />
                </a>
              </li>
              <li>
                <a href="" onClick={getConsol}>Consol Panel</a>
              </li>
              <li>
                <a href="" onClick={getBasket}>
                  Basket
                </a>
              </li>
              <li>
                <a href="" onClick={getWishlist}>
                  Wishlist
                </a>
              </li>
            </ul>
          </div>
          <div className={style.bars}>
            <FaBars />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
