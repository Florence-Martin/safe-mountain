import React from "react";
import "../styles/Contact.css";
import "../styles/Infos.css";

const Info = () => {
  return (
    <div className="form-group">
      <h1 className=" text-center text-2xl">SOS Infos</h1>

      <dl className="container">
        <dt>Numéro URGENCE</dt>
        <dd className="hover:text-red-500  hover:text-2xl">112</dd>
      </dl>
      <dl className="container">
        <dt>Numéro SAMU</dt>
        <dd className="hover:text-red-500 hover:text-2xl">15</dd>
      </dl>
      <dl className="container">
        <dt>Numéro POMPIER</dt>
        <dd className="hover:text-red-500 hover:text-2xl">18</dd>
      </dl>
      <dl className="container">
        <dt>Numéro METEO MONTAGNE</dt>
        <dd className="hover:text-red-500 hover:text-2xl">1.....</dd>
      </dl>
    </div>
  );
};

export default Info;
