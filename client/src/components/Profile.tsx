import React from "react";
import { Link } from "react-router-dom";

interface ProfileComponentProps {
  imageUrl: string;
  username: string;
  description: string;
}

const ProfileComponent: React.FC<ProfileComponentProps> = ({
  imageUrl,
  username,
  description,
}) => {
return (
  <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg">
    <div className="flex items-center flex-col">
      <img
        className="h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-orange-600"
        src={imageUrl}
        alt={username}
      />
      <div className="mt-4">
        <div className="text-xl font-bold text-gray-900">{username}</div>
      </div>
    </div>
    <div className="mt-4">
      <p className="text-sm text-gray-600">{description}</p>
    </div>
    <div className="mt-4 flex space-x-4">
      <Link
        to="/addcol"
        className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Collection
      </Link>
      <Link
        to="/editprofile"
        className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
      >
        Edit My Profile
      </Link>
    </div>
  </div>
);}


export default ProfileComponent;
