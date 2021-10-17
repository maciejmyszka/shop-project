import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation-wrapper">
      <NavLink to="/products">Lista produktów</NavLink>
      <NavLink to="/categories">Lista kategorii</NavLink>
      <NavLink to="/edit-product">Edycja produktu</NavLink>
      <NavLink to="/edit-category">Edycja kategorii</NavLink>
      <NavLink to="/add-product-category">Tworzenie nowej kategorii i produktu</NavLink>
    </div>
  )
}

export default Navigation;