import React from "react";
import UserImage from "../../components/UserImage";
interface UserWidgetProps {
  userId: string;
  picturePath: string;
  firstName: string;
  lastName: string;
  description: string;
  viewedProfile: number;
  impressions: number;
  friends: string[];
}

const UserWidget: React.FC<UserWidgetProps> = ({
  picturePath,
  firstName,
  lastName,
  description,
  viewedProfile,
  impressions,
  friends,
}) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center justify-center">
        <img
          className="rounded-full w-24 h-24 mx-auto"
          src={picturePath}
          alt="user"
        />
      </div>
      <h2 className="text-lg text-maintheme mt-4 font-semibold">
        {firstName} {lastName}
      </h2>
      <p className="text-gray-600 text-sm mt-1">{`${friends.length} friends`}</p>
      <div className="mt-4 space-y-4">
        <div className="text-sm text-gray-600 flex items-center">
          <svg
            className="w-4 h-4 mr-1 text-maintheme"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span>Friends: {friends.length}</span>
        </div>
        <div className="text-sm text-gray-600 flex items-center">
          <svg
            className="w-4 h-4 mr-1 text-maintheme"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span>{description}</span>
        </div>
      </div>
      <div className="mt-4 space-y-4">
        <div className="text-sm text-gray-600 flex items-center">
          <svg
            className="w-4 h-4 mr-1 text-maintheme"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v6m0 0v6m0-6h6m-6 0H4"
            />
          </svg>
          <span>Who's viewed your profile: {viewedProfile}</span>
        </div>
        <div className="text-sm text-gray-600 flex items-center">
          <svg
            className="w-4 h-4 mr-1 text-maintheme"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v6m0 0v6m0-6h6m-6 0H4"
            />
          </svg>
          <span>Impressions of your post: {impressions}</span>
        </div>
      </div>
    </div>
  );
};

export default UserWidget;
