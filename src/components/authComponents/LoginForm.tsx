import { useEffect, useState } from "react";
import Logo from "../Logo";
import { useLoginMutation } from "../../features/auth/authApiSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (username && password) {
      login({ username, password })
        .unwrap()
        .then((response) => {
          const accessToken = response.accessToken;
          // Save the access token in LocalStorage
          localStorage.setItem("accessToken", accessToken);
          // Redirect or perform other actions
          navigate("/dashboard");
          // Redirect or perform other actions
          console.log("Login successful");
        })
        .catch((error) => {
          // Handle login error
          console.error(error);
        });
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="flex flex-col items-center mt-52">
      <Logo />

      <h1 className="text-4xl font-black text-black mt-8">
        Log in to your account
      </h1>
      <p className="text-base text-gray-600 mt-2">
        Welcome coach! Please enter your details.
      </p>

      <form className="mt-8 w-64 lg:w-96" onSubmit={handleSubmit}>
        <div className="relative border border-solid border-gray-300 rounded-xl p-2">
          <div className="h-1/2 border-gray-300"></div>
          <input
            name="username"
            type="text"
            placeholder="Enter your username"
            className="w-full px-4 py-2 outline-none border-b border-solid border-gray-300"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            name="password"
            type="password"
            placeholder="●●●●●●●●"
            className="w-full px-4 py-2 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4 w-full"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="text-blue-700 text-sm mt-2">Forgot password</p>
      <p className="text-gray-600 text-sm mt-2">
        Not yet registered?{" "}
        <a href="./register" className="text-blue-700">
          Register here
        </a>
      </p>
    </div>
  );
};

export default LoginForm;
