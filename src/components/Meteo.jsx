import flag from "../assets/drapeau-avalanche.jpg";
import meteo from "../assets/meteo.png";
import Alerts from "./Alerts";
import HeadBand from "./HeadBand";

const Meteo = () => {
  return (
    <>
      <div>
        <HeadBand />
      </div>
      <Alerts />
      <img
        src={flag}
        alt="flag"
        className="ml-24 -mt-16 rounded-full w-24 h-24 z-10"
      />

      <div className="flex justify-center m-2"></div>

      <div className="flex justify-center mx-8">
        <div className="">
          <img src={meteo} alt="carte météo" />
        </div>
      </div>
    </>
  );
};

export default Meteo;
