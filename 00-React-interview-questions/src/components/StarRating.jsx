import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ totalStars = 5 }) => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(null);

  const handleRating = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <>
      <h1 className="text-4xl font-bold mb-6 text-center mt-14 text-gray-800 tracking-wide">
        🌟 Star Rating
      </h1>
      <div className="h-[90vh] flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4 mt-8">
          <h1 className="text-2xl font-semibold">Rate Us!</h1>
          <div className="flex space-x-2">
            {Array.from({ length: totalStars }, (_, index) => {
              const starValue = index + 1;
              return (
                <FaStar
                  key={starValue}
                  size={32}
                  onMouseEnter={() => setHoverRating(starValue)}
                  onMouseLeave={() => setHoverRating(null)}
                  onClick={() => handleRating(starValue)}
                  className={`cursor-pointer transition-all duration-200 ${
                    starValue <= (hoverRating || selectedRating)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                />
              );
            })}
          </div>
          <p className="text-lg font-medium text-gray-700">
            {selectedRating > 0
              ? `You rated this ${selectedRating} out of ${totalStars}`
              : "Click on the stars to rate"}
          </p>
        </div>
      </div>
    </>
  );
};

export default StarRating;
