import { useEffect, useState } from "react";
import { BiSolidCartAdd } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/mobile");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);
  return (
    <div>
      <section className="py-20 w-full lg:w-[1440px] mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                Our Services
              </h2>
              <p className="text-base text-body-color">
                A Phone service offer generally refers to the products or
                services offered by a company or organization in the context of
                Mobile. These services may include
              </p>
            </div>
          </div>
        </div>

        <div className="w-full container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data?.data?.map((service) => (
            <div
              key={service?.id}
              className=" rounded-md shadow-md group relative"
            >
              <img
                src={service?.image}
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 dark-bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold tracking-tighter">
                    {service?.name}
                  </h2>
                  <p className="text-black font-semibold">
                    {service?.details.slice(0, 90)}
                  </p>

                  <p className="text-black font-semibold flex my-2">
                    {Array(service?.rating)
                      .fill(0)
                      .map((index, i) => (
                        <FaStar key={i} className="w-4 h-4 text-yellow-500" />
                      ))}
                  </p>
                  <p className="text-black font-semibold">
                    price: {service?.price} $
                  </p>
                </div>

                <div className="flex justify-center absolute bottom-0 left-0 w-full h-0 flex-col  items-center opacity-0 group-hover:h-full group-hover:opacity-90 duration-1000">
                  <div className="flex gap-2 justify-center items-center">
                    <button className="w-52 h-10 font-semibold bg-slate-600 text-white hover:bg-white hover:text-black hover:shadow-lg">
                      Add to cart
                      <BiSolidCartAdd className="text-2xl ml-2 -mt-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Card;
