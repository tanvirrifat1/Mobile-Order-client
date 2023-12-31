import { useContext } from "react";
import { AuthContext } from "../Shared/Provider/AuthProvider";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const Shop = () => {
  const { user } = useContext(AuthContext);

  const {
    data = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://mobile-order-nu.vercel.app/api/v1/cart/total?email=${user?.email}`
      );
      return res.json();
    },
  });

  const total = data?.data?.reduce(
    (sum, item) => sum + parseInt(item.price),
    0
  );

  if (isLoading) {
    return <p className="text-center text-2xl mt-10">Loading....</p>;
  }

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://mobile-order-nu.vercel.app/api/v1/cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.data) {
              console.log(data);
              refetch();
            }
          });

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="min-h-[650px] p-4">
      <h1 className="text-3xl my-2">total price: {total}</h1>
      <div className="w-full container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
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

                <p className="text-black font-semibold">
                  price: {service?.price} $
                </p>
              </div>
            </div>

            <div>
              <button
                onClick={() => handleDelete(service?.id)}
                type="button"
                className="px-8 py-3 font-semibold  my-4 mx-4 border border-black text-black rounded-full"
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
