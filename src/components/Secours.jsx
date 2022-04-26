import React from "react";
import HeadBand from "./HeadBand";
import image from "../assets/trousse-secours.jpg";

const Secours = () => {
  return (
    <div>
      <HeadBand />
      <h1 className="  text-center text-3xl">Trousse de secours</h1>
      <section className="overflow-hidden text-gray-700 mt-8">
        <div className=" px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div className="flex items-center">
            <img src={image} alt="TroussesDeSecours" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Secours;
