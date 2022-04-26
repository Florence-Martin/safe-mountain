import React from "react";
import HeadBand from "./HeadBand";
import image from "../assets/secours.jpeg";

const Secours = () => {
  return (
    <div>
      <HeadBand />
      <h1 className="  text-center text-3xl">Trousse de secours</h1>
      <p className="mx-8">
        Votre pharmacien peut vous aider à établir la liste pour les premiers
        secours !
      </p>
      <section className="overflow-hidden text-gray-700 mt-2">
        <div className=" px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div className="flex  placeholder:items-center ">
            <img src={image} alt="Secours" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Secours;
