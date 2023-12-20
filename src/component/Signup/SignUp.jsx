import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.name.value;
    const password = form.email.value;
    const name = form.password.value;

    console.log(email, password, name);
  };

  return (
    <div>
      <div className="flex justify-center items-center mt-36">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl  bg-white shadow-xl">
          <h1 className="text-2xl font-bold text-center">SignUp</h1>
          <form onSubmit={handleLogin} action="" className="space-y-6">
            <div className="space-y-1 text-sm">
              <label className="text-black">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="name"
                className="w-full px-4 py-3 rounded-md border border-black"
              />
            </div>
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

            <button className="block w-full p-3 text-center  bg-purple-700 text-white rounded-md">
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
            Already have an account?
            <Link
              to={"/login"}
              rel="noopener noreferrer"
              className="underline "
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
