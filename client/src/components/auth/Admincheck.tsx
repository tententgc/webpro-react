import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Admincheck = () => {
  const [isAdmin, setIsAdmin] = useState<string>("");

  useEffect(() => {
    const checkAdmin = () => { 
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      if (user) {
        setIsAdmin(user.isAdmin);
      } else {
        setIsAdmin("");
      }
    };
    checkAdmin();

    console.log(isAdmin);
  }, []);

  return (
    <div>
      {isAdmin !== "admin" ? (
        <li className="text-gray-600 hover:text-blue-600">
          <Link to="/about">About</Link>
        </li>
      ) : (
        <li className="text-gray-600 hover:text-blue-600">
          <Link to="/manage">Manage</Link>
        </li>
      )}
    </div>
  );
};

export default Admincheck;
