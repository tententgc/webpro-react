import React, { useState } from "react";
import axios from "axios";
import { BaseURL } from "../api/BaseURL";

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("signinlink", BaseURL);

    try {
      const response = await axios.post(
        `${BaseURL}/auth/login`,
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data));
        window.location.href = "/home";
      } else {
        // Handle error
        alert("Invalid username or password. Please try again.");
        console.error("Error logging in");
      }
    } catch (error) {
      alert("Invalid username or password. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-4xl font-extrabold text-orange-600">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Sign in
            </button>
          </div>

          <div className="flex items-center justify-center mt-6">
            <div className="text-sm">
              <span className="font-medium text-slate-600 ">
                Don't have an account?
              </span>
              <a
                href="/signup"
                className="font-medium text-orange-600 hover:text-orange-500 ml-2"
              >
                {" "}
                Sign up
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
