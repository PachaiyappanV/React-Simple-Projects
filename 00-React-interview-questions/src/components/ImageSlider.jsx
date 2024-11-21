import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { images } from "../constants";

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <>
      <h1 className="text-4xl font-extrabold mb-8 text-center mt-14 text-gray-900 tracking-wide">
        Image Slider
      </h1>
      <div className="flex items-center justify-center h-[90vh]">
        <div className="relative w-full max-w-3xl aspect-[16/9] bg-gradient-to-b from-gray-700 via-gray-800 to-black rounded-xl overflow-hidden shadow-lg">
          {/* Image */}
          <img
            src={`/${images[currentImage]}`}
            alt={`Slide ${currentImage + 1}`}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
          />

          {/* Left Arrow */}
          <FaArrowCircleLeft
            onClick={() =>
              setCurrentImage(
                currentImage === 0 ? images.length - 1 : currentImage - 1
              )
            }
            className="absolute m-auto inset-y-0 left-4 text-white text-4xl cursor-pointer hover:text-gray-400 transition duration-300"
          />

          {/* Right Arrow */}
          <FaArrowCircleRight
            onClick={() => setCurrentImage((currentImage + 1) % images.length)}
            className="absolute m-auto inset-y-0 right-4 text-white text-4xl cursor-pointer hover:text-gray-400 transition duration-300"
          />

          {/* Dots */}
          <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`cursor-pointer rounded-full h-4 w-4 transition-all duration-300 ${
                  currentImage === index
                    ? "bg-red-600 scale-110"
                    : "bg-white hover:scale-110 hover:bg-red-400"
                }`}
                onClick={() => setCurrentImage(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
