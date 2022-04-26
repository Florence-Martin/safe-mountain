import React from "react";
import CardHome from "./CardHome";
import HeadBand from "./HeadBand";

import "animate.css";

const Home = () => {
  return (
    <div>
      <HeadBand />
      <h1 className="text-center sm:text-xl md:text-2xl lg:text-3xl ">
        <p className="animate__animated animate__rubberBand">
          Bienvenue sur Mountain Safe
        </p>
      </h1>
      <CardHome />
    </div>
  );
};

export default Home;
