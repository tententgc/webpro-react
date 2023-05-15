import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { app, analytics, auth } from "../../firebaseConfig";
import Navbar from "../Navbar";
import { signOut, onAuthStateChanged } from "firebase/auth";

const Authentication = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState<string | null>(
    null
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticatedUser(user.email);
      } else {
        setAuthenticatedUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
