// ProfileComponents.tsx

import React from "react";

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
    <div className="flex items-center bg-white p-4 rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        <img
          className="h-24 w-24 rounded-full border-4 border-orange-600"
          src={imageUrl}
          alt={username}
        />
      </div>
      <div className="ml-4 flex-grow">
        <div className="text-xl font-bold text-gray-900">{username}</div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
        Add Collection
      </button>
    </div>
  );
};

export default ProfileComponent;
