import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Secours from "./components/Secours";
import Meteo from "./components/Meteo";
import IgnCard from "./components/IgnCard";
import Mountain from "./components/Mountain";
import Infos from "./components/Infos";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import image from "./assets/404.jpg";
import "./styles/index.css";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/montagne" element={<Mountain />} />
        <Route path="/meteo" element={<Meteo />} />
        <Route path="/ign" element={<IgnCard />} />
        <Route path="/secours" element={<Secours />} />
        <Route path="/info" element={<Infos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p className="text-gray-600 py-6 text-center text-5xl">
                There's nothing here!
                <br /> <br />
                Le fameux <strong>404 !</strong>
              </p>
              <img className="bg-center" src={image} alt="erreur" />
            </main>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
