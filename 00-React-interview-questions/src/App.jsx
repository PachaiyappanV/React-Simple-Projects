import Accordion from "./components/Accordion";
import ImageSlider from "./components/ImageSlider";
import NavigationMenu from "./components/NavigationMenu";
import Popup from "./components/PopUp";

import { useState, useRef } from "react";
import GithubProfileFinder from "./components/GithubProfileFinder";
import RandomColor from "./components/RandomColor";
import ScrollIndicator from "./components/ScrollIndicator";
import StarRating from "./components/StarRating";
import Tabs from "./components/Tabs";
import UseFetchHook from "./components/UseFetchHook";
import Dropdown from "./components/UseOnclickOutside";
import UseWindowResizeHook from "./components/UseWindowResizeHook";

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const randomColorRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Enables smooth scrolling
    });
  };

  const scrollToBottom = () => {
    console.log(
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight
    );
    window.scrollTo({
      top: 100000,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-[100%] bg-gray-50">
      <nav className="flex items-center justify-center space-x-2  bg-emerald-400 p-3">
        <button
          onClick={() => scrollToSection(randomColorRef)}
          className="p-2 bg-fuchsia-700 rounded-lg text-white "
        >
          Random color
        </button>
      </nav>
      <button
        onClick={scrollToBottom}
        className="p-2 absolute right-4 bg-yellow-400 rounded-lg top-20 "
      >
        Scroll to Bottom
      </button>

      <ScrollIndicator />
      <Accordion />
      <section ref={randomColorRef}>
        <RandomColor />
      </section>

      <StarRating totalStars={10} />
      <ImageSlider />
      <NavigationMenu />
      <Tabs />
      <Popup />
      <div id="popup" className="p-4 fixed top-20">
        {/* Open Popup Button */}
        <button
          onClick={() => setIsPopupOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Open Popup
        </button>

        {/* Popup Component */}
        <Popup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          title="Enhanced Popup"
          size="medium"
        >
          <p>
            This is the content inside the popup! You can add anything here.
          </p>
          <button
            onClick={() => setIsPopupOpen(false)}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Close Popup
          </button>
        </Popup>
      </div>
      <GithubProfileFinder />
      <UseFetchHook />
      <div className="h-screen">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          use-onclick-outside
        </h2>
        <div className="h-[80%] w-full flex items-center justify-center">
          <Dropdown />
        </div>
      </div>
      <UseWindowResizeHook />
      <div className="flex justify-end">
        <button
          onClick={scrollToTop}
          className="p-2 mb-4 mr-4 bg-yellow-400 rounded-lg "
        >
          Scroll to Top
        </button>
      </div>
    </div>
  );
}
