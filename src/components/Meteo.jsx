import React from "react";

import image from "../assets/drapeau-avalanche.jpg";
import HeadBand from "./HeadBand";

const Meteo = () => {
  return (
    <>
      <div>
        <HeadBand />
      </div>

      <div className="flex-row">
        <img
          src={image}
          alt="flag"
          className="ml-8 mt-6 rounded-full w-28 h-28 "
        />
      </div>
      <div className=""></div>
    </>
  );
};

export default Meteo;
