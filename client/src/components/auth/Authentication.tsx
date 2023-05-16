import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Authentication = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState<string | null>(
    null
  );

  useEffect(() => {
    const checkUser = () => {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      console.log(user); 
      if (user) {
        setAuthenticatedUser(user.user);
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

  console.log(authenticatedUser);
  return (
    <div>
      {authenticatedUser === null ? (
        <Link
          to="/signin"
          className="px-4 py-2 font-medium text-white bg-orange-600 rounded-md hover:bg-orange-400"
        >
          Sign In
        </Link>
      ) : (
        <button
          onClick={handleSignOut}
          className="px-4 py-2 font-medium text-white bg-orange-600 rounded-md hover:bg-orange-400"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Authentication;
