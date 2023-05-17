import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Admincheck from "./Admincheck";
const Authentication = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState<string | null>(
    null
  );
  const [isAdmin, setIsAdmin] = useState<string>("");
  
  useEffect(() => {
    const checkUser = () => {
      const user = JSON.parse(localStorage.getItem("user") || "{}");

      if (user) {
        setAuthenticatedUser(user.user);
        try{
           setIsAdmin(user.user.role );
        }
        catch(err){
          setIsAdmin("");
        } 
      } else {
        setAuthenticatedUser(null);
      }
    };

    // Check user status when component mounts
    checkUser();

    // Re-check user status when localStorage changes
    window.addEventListener("storage", checkUser);

    // Cleanup listener
    return () => window.removeEventListener("storage", checkUser);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    setAuthenticatedUser(null);
    console.log("Signed out");
  };

  console.log(isAdmin)
  console.log(authenticatedUser);
  return (
    <div>
      {authenticatedUser === null ? (
        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
          <li className="text-gray-600 hover:text-blue-600">
            <Link to="/home">Home</Link>
          </li>
          <li className="text-gray-600 hover:text-blue-600">
            <Link to="/collection">My Collection</Link>
          </li>
          <li className="text-gray-600 hover:text-blue-600">
            <Link to="/about">About</Link>
          </li>

          <li className="text-gray-600 hover:text-blue-600">
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link
              to="/signin"
              className="px-4 py-2 font-medium text-white bg-orange-600 rounded-md hover:bg-orange-400"
            >
              Sign In
            </Link>
          </li>
        </ul>
      ) : isAdmin === "admin" ? (
        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
          <li className="text-gray-600 hover:text-blue-600">
            <Link to="/home">Home</Link>
          </li>
          <li className="text-gray-600 hover:text-blue-600">
            <Link to="/collection">My Collection</Link>
          </li>
          <li className="text-gray-600 hover:text-blue-600">
            <Link to="/manage">Manage</Link>
          </li>
          <li className="text-gray-600 hover:text-blue-600">
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 font-medium text-white bg-orange-600 rounded-md hover:bg-orange-400"
            >
              Logout
            </button>
          </li>
        </ul>
      ) : (
        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
          <li className="text-gray-600 hover:text-blue-600">
            <Link to="/home">Home</Link>
          </li>
          <li className="text-gray-600 hover:text-blue-600">
            <Link to="/collection">My Collection</Link>
          </li>
          <li className="text-gray-600 hover:text-blue-600">
            <Link to="/about">About</Link>
          </li>
          <li className="text-gray-600 hover:text-blue-600">
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 font-medium text-white bg-orange-600 rounded-md hover:bg-orange-400"
            >
              Logout
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Authentication;
