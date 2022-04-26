import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import NavBarLinks from "./NavBarLink";
import ThemeSwitch from "./ThemeSwitch";

function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex  justify-between items-center  text-white bg-gray-600  bg-back border-b-2 px-4 ">
      <div>
        <Link
          to="/"
          className="text-primary font-bold text-xl btn btn-primary hover:bg-gray-600"
        >
          SAFE MOUNTAIN
        </Link>
      </div>
      <ThemeSwitch />
      <Link
        to="/info"
        className="btn rounded-sm btn-primary  hover:bg-red-500 cursor-pointer mr-4"
      >
        SOS infos
      </Link>

      <NavBarLinks isOpen={isOpen} burger setOpen={setOpen} />
      <NavBarLinks burger={false} setOpen={setOpen} />
      <div id="burgerMenu" className=" lg:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} color="#AEA06E" />
      </div>
    </div>
  );
}

export default NavBar;
