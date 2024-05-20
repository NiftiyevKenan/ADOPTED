import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Basket from '../Pages/Basket/Basket'
import Wishlist from '../Pages/Wishlist/Wishlist'
import ConsolPanel from "../Pages/ConsolPanel/ConsolPanel";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/consol' element={<ConsolPanel/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
