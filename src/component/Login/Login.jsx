import { useContext } from "react";
import { BiArrowBack } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Shared/Provider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        // Handle error
      });
  };

  return (
    <div>
      <div>
        <Link to={"/"}>
          <BiArrowBack className="text-3xl ml-6 mt-9" />
        </Link>
      </div>
      <div className="flex justify-center items-center mt-36">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl  bg-white shadow-xl">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <form onSubmit={handleLogin} action="" className="space-y-6">
            <div className="space-y-1 text-sm">
              <label className="text-black">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="email"
                className="w-full px-4 py-3 rounded-md border border-black"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label className="text-black">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                className="w-full px-4 py-3 rounded-md border border-black"
              />
            </div>

            <button className="block w-full p-3 text-center  bg-green-700 text-white rounded-md">
              Sign in
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div className="flex justify-center">
            <button aria-label="Log in with Google" className="p-3 rounded-sm">
              <FaGoogle className="text-4xl" />
            </button>
          </div>
          <p className="text-xs text-center sm:px-6 text-black">
            Dont have an account?
            <Link
              to={"/signup"}
              rel="noopener noreferrer"
              className="underline "
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
