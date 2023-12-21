import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Shared/Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <header className="p-4 ">
        <div className="container flex justify-between h-16 mx-auto">
          <nav className="flex items-center justify-between ">
            <ul className="flex items-center space-x-3 lg:flex font-semibold">
              <li className="flex">
                <Link
                  to={"/"}
                  className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                >
                  Home
                </Link>
              </li>
              <li className="flex">
                <Link
                  to={"/card"}
                  className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                >
                  Card
                </Link>
              </li>
              <li className="flex">
                <Link
                  to={"/shop"}
                  className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                >
                  <FaShoppingCart className="text-xl" />
                </Link>
              </li>
            </ul>
          </nav>
          {user?.photoURL && (
            <div>
              <div className="flex flex-col mt-2 items-center justify-center">
                <div className="flex justify-center gap-2">
                  <div className="flex space-x-5">
                    <img
                      alt=""
                      className="w-12 h-12 rounded-full ri ri dark:bg-gray-500 ri ri"
                      src={user.photoURL}
                    />
                  </div>
                  <p className="lg:mt-4 font-semibold">
                    Welcome{" "}
                    <span className="text-purple-800">{user.displayName}</span>
                  </p>
                </div>
              </div>
            </div>
          )}

          {user ? (
            <>
              <div
                onClick={handleLogOut}
                className="flex items-center md:space-x-4"
              >
                <button
                  type="button"
                  className=" px-6 py-2 font-semibold rounded lg:block border border-black"
                >
                  Log Out
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center md:space-x-4">
                <Link to={"/login"}>
                  <button
                    type="button"
                    className=" px-6 py-2 font-semibold rounded lg:block border border-black"
                  >
                    Log in
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
