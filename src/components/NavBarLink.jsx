import React from "react";
import { NavLink } from "react-router-dom";

function NavBarLinks({ isOpen, setOpen, burger }) {
  return (
    <div
      className={`text-sm  ${
        // eslint-disable-next-line no-nested-ternary
        burger
          ? isOpen
            ? "flex flex-col  gap-4  text-white font-semibold text-base bg-gray-600 absolute z-50 rounded-lg p-4  border-l-2 border-b-2 right-0 -mb-96 lg:hidden"
            : "hidden"
          : " hidden text-xl  lg:flex lg:flex-row lg:gap-5"
      } `}
      onClick={() => {
        if (isOpen) {
          setOpen(false);
        }
      }}
    >
      <NavLink activeClassName="active" to="/">
        Accueil
      </NavLink>
      <NavLink activeClassName="active" to="/montagne">
        Montagne - Liste
      </NavLink>
      <NavLink activeClassName="active" to="/meteo">
        Météo
      </NavLink>
      <NavLink activeClassName="active" to="/ign">
        Carte IGN
      </NavLink>
      <NavLink activeClassName="active" to="/secours">
        Trousse de secours
      </NavLink>
      <NavLink className="text-red-400" activeClassName="active" to="/info">
        SOS infos
      </NavLink>
      <NavLink
        className="text-yellow-200"
        activeClassName="active"
        to="/flag"
      >
        Code Drapeaux Avalanches
      </NavLink>
      <NavLink activeClassName="active" to="/contact">
        Contact
      </NavLink>
      <NavLink activeClassName="active" to="/signup">
        Login
      </NavLink>
    </div>
  );
}

export default NavBarLinks;
