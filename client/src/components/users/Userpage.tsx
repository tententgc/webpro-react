import React, { useEffect, useState } from "react";
import axios from "axios";
import Profile from "../Profile";

// Define a type for the user data
interface User {
  profileImage: string;
  username: string;
  description: string;
}

// Define a type for the component props
interface UserProfileProps {
  id: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ id }) => {
  const [user, setUser] = useState<User | null>(null);
  const serverUrl = "http://localhost:3001";

useEffect(() => {
  const fetchUserData = async () => {
    try {
      const response = await axios.get<User>(`${serverUrl}/api/users/${id}`);
      setUser(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Fetch the user data immediately
  fetchUserData();

  // And then every 5 seconds
  const intervalId = setInterval(fetchUserData, 1000);

  // Clear the interval when the component is unmounted
  return () => clearInterval(intervalId);
}, [id, serverUrl]);


  return (
    user && (
      <Profile
        imageUrl={`${serverUrl}/${user.profileImage}`}
        username={user.username}
        description={user.description}
      />
    )
  );
};

export default UserProfile;
