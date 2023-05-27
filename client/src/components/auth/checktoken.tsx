import React from 'react'
import jwt from "jsonwebtoken";

const checktoken = () => {

    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwt.decode(token);
      if (decodedToken) {
        // Extract the user data from the decoded token
        const userData = decodedToken as { userId: string; email: string };
        console.log(userData);
      }
    }

  return (
    <div>checktoken</div>
  )
}

export default checktoken