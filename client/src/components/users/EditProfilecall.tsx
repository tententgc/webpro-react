import React, { useState, useEffect } from "react";
import axios from "axios";

interface EditProfileProps {
  id: string;
}

const EditProfile: React.FC<EditProfileProps> = ({ id }) => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState<File | null>(null);

  const fetchUserData = async () => {
    const response = await axios.get(`http://localhost:3001/api/users/${id}`);
    const data = response.data;
    setUsername(data.username);
    setDescription(data.description);
    setPassword("");
  };

  useEffect(() => {
    fetchUserData();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("userId", id);
    formData.append("username", username);
    formData.append("description", description);
    formData.append("password", password);
    if (profileImage) {
      formData.append("profileImage", profileImage);
    }

    try {
      const response = await axios.put(
        `http://localhost:3001/api/users/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      window.location.href = "/collection";
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Profile Image:
        <input
          type="file"
          onChange={(e) => setProfileImage(e.target.files ? e.target.files[0] : null)}
          className="mt-2"
        />
      </label>
      <button 
        type="submit"
        className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default EditProfile;
