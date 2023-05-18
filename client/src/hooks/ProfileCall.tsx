import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import UserPage from "../components/users/Userpage";
import jwt_decode from "jwt-decode";


interface DecodedToken {
  userId: string;
  // add other properties you might expect from the decoded token here
}

const ProfileCall = () => {
       const [ProfileID, setProfileID] = useState("");

   useEffect(() => {
     const token = localStorage.getItem("user");
     if (token) {
       const decoded: DecodedToken = jwt_decode(token);
       setProfileID(decoded.userId);
     }
   }, []);

   useEffect(() => {
     const handleStorageChange = () => {
       const token = localStorage.getItem("user");
       if (token) {
         const decoded: DecodedToken = jwt_decode(token);
         setProfileID(decoded.userId);
       } else {
         setProfileID(""); // Empty ProfileID when user logs out
       }
     };

     window.addEventListener("storage", handleStorageChange);
     return () => {
       window.removeEventListener("storage", handleStorageChange);
     };
   }, []); 
   return (
     <>
       <UserPage id={ProfileID || ""} />{" "}
     </>
   );
}

export default ProfileCall;