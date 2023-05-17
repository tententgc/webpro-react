// ProductCard.tsx
import React, { useState } from "react";

interface ProductProps {
  imgSrc: string;
  author: string;
  name: string;
  likes: number;
}

const ProductCard: React.FC<ProductProps> = ({
  imgSrc,
  author,
  name,
  likes,
}) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-2xl p-4 transform transition ease-in-out">
      <a href="#">
        <img
          src={imgSrc}
          alt="Product"
          className="h-80 w-full object-cover rounded-t-xl"
        />
        <div className="pt-4 w-full">
          <span className="text-orange-600 mr-3 uppercase text-xs font-semibold">
            {author}
          </span>
          <p className="text-xl font-bold text-gray-900 truncate block capitalize">
            {name}
          </p>
          <div className="flex items-center mt-4">
            <button
              onClick={handleLike}
              className={`flex items-center ${
                liked ? "text-orange-600" : "text-gray-400"
              } transition duration-300 ease-in-out`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className={`bi bi-heart ${
                  liked ? "fill-current" : "stroke-current stroke-2"
                }`}
                viewBox="0 0 16 16"
              >
                <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279 3.279 7.824 1.143 11.369.021 15.667 3.2 8 15z" />
              </svg>
              <span className="ml-1 text-gray-600">{likeCount}</span>
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
