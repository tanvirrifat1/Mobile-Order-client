import { useContext, useEffect, useState } from "react";
import { BiSolidCartAdd } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../Shared/Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Card = () => {
  const { user, loading } = useContext(AuthContext);
  const router = useNavigate();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://mobile-order-nu.vercel.app/api/v1/mobile?searchTerm=${searchQuery}`
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleAddToCart = (service) => {
    if (user && user?.email) {
      const saveData = {
        type: service.type,
        details: service.details,
        email: user?.email,
        image: service.image,
        name: service.name,
        price: service.price,
        processor: service.processor,
        memory: service.memory,
        productId: service?._id,
      };

      fetch(`https://mobile-order-nu.vercel.app/api/v1/cart/create-cart`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data?.statusCode);
          if (data?.statusCode === 200) {
            Swal.fire("Add to cart successfully");
            router("/shop");
          } else {
            Swal.fire("Already Booked!");
          }
        });
    } else {
      Swal.fire({
        title: "Please Login First?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          router("/login", { state: { from: location } });
        }
      });
    }
  };

  if (loading) {
    <p className="text-center text-2xl mt-10">Loading....</p>;
  }

  return (
    <div className="p-2">
      <section className="py-20 container mx-auto">
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
        {/*  */}
        <div className="relative my-6">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2 ">
            <button
              type="submit"
              title="Search"
              className="p-1 focus:outline-none focus:ring"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 512 512"
                className="w-4 h-4 text-black"
              >
                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="Search"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none border border-black text-black"
          />
        </div>
        {/*  */}
        <div className="w-full container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
          {data?.data?.map((service) => (
            <div
              key={service?.id}
              className=" rounded-md bg-white shadow-md group relative p-2"
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
                  <p className="text-black font-semibold">
                    Memory: {service?.memory}
                  </p>
                  <p className="text-black font-semibold">
                    Type: {service?.type}
                  </p>
                  <p className="text-black font-semibold">OS: {service?.os}</p>
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
                  <div
                    onClick={() => handleAddToCart(service)}
                    className="flex gap-2 justify-center items-center"
                  >
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
