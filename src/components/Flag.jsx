import drapeau from "../assets/Panneaux_avalanches.jpeg";

const Flag = () => {
  return (
    <div>
      <section className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32 pt-4">
        <img src={drapeau} alt="drapeau-avalanche" />
      </section>
    </div>
  );
};

export default Flag;
