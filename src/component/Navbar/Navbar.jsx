import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Shared/Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

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
            </ul>
          </nav>

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
