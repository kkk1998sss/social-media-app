import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustButton from "../components/CustButton";
import CustInput from "../components/CustInput";
import arrow from "./../assets/Arrow Icon.png";
import google from "./../assets/Vector.png";
import twitter from "./../assets/Vector (1).png";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password: string | any[]) => {
    return password.length >= 6;
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (isLogin) {
      const user = localStorage.getItem(email);

      if (user) {
        const userDetails = JSON.parse(user);
        if (userDetails.password === password) {
          console.log("Login successful");
          navigate("/Menu");
          setEmail("");
          setPassword("");
          setError("");
        } else {
          setError("Invalid email or password");
        }
      } else {
        setError("User does not exist");
      }
    } else {
      const user = localStorage.getItem(email);
      if (user) {
        setError("User already exists");
      } else {
        localStorage.setItem(email, JSON.stringify({ email, password }));
        alert("User registered successfully");
        setEmail("");
        setPassword("");
        setError("");
      }
    }
  };

  return (
    <div>
      <Link to="/">
        <CustButton
          onClick={() => {}}
          className="py-4 px-3 m-4 bg-green-500 hover:bg-green-700 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          children={undefined}
          childrenImage={arrow}
          classNameImage="px-2"
        />
      </Link>
      <div className="text-center">
        <h1 className="text-5xl font-medium">Hello Again!</h1>
        <h6 className="px-6 text-slate-400">
          {isLogin ? "Sign in to your account" : "Create a new account"}
        </h6>
      </div>
      <form onSubmit={handleSubmit}>
        <CustInput
          id="email"
          children=""
          value={email}
          onChange={handleEmailChange}
          label="Email Address"
        />
        <CustInput
          id="password"
          type="password"
          children=""
          label="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        {error && <div className="text-red-500 text-center">{error}</div>}
        {isLogin && (
          <div className="text-green-500 text-left ml-4 my-6">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <u>Forget Your Password?</u>
            </a>
          </div>
        )}
        <div className="text-center">
          <button
            onClick={() => {}}
            type="submit"
            children={isLogin ? "Sign in" : "Sign up"}
            className="py-4 w-11/12 text-white bg-green-500 hover:bg-green-700 rounded-lg shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          />
        </div>
      </form>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-40 h-px ml-5 my-8 bg-gray-300 border-dashed" />
        <span className=" px-3 font-medium text-gray-700  bg-white whitespace-nowrap">
          Or with
        </span>
        <hr className="w-40 h-px mr-5 my-8 bg-gray-300 border-dashed" />
      </div>
      <div className="text-center">
        <CustButton
          children="Sign in Google"
          className="py-4 my-2 w-11/12 bg-white text-black border-2  border-gray-100 font-medium hover:bg-green-400 hover:text-white rounded-lg"
          childrenImage={google}
          classNameImage="px-2 w-auto h-4"
        />
        <CustButton
          children="Sign in Twitter"
          className="py-4 my-2 w-11/12 bg-white text-black border-2 border-gray-100 font-medium hover:bg-green-400 hover:text-white"
          childrenImage={twitter}
          classNameImage="px-2 w-auto h-4"
        />
      </div>
      <div className="text-center my-6">
        <h1>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-green-500 underline"
          >
            {isLogin ? "Sign up" : "Sign in"}
          </button>
        </h1>
      </div>
    </div>
  );
};

export default SignUp;
