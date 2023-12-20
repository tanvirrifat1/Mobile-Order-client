import img from "../../assets/smartPhone.png";
import xiomi from "../../assets/xiomi.png";
import sam from "../../assets/sam.png";
import redmi from "../../assets/redmi.png";
import mobile from "../../assets/mobile3.jpg";

const Gallary = () => {
  return (
    <div>
      <section className="py-6 ">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src={img}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src={xiomi}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src={sam}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src={redmi}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src={mobile}
          />
        </div>
      </section>
    </div>
  );
};

export default Gallary;
