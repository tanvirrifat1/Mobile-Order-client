import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Google = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div onClick={handleGoogleLogin} className="flex justify-center">
        <button aria-label="Log in with Google" className="p-3 rounded-sm">
          <FaGoogle className="text-4xl" />
        </button>
      </div>
    </div>
  );
};

export default Google;
