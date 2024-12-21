import Accordion from "./components/Accordion";
import ImageSlider from "./components/ImageSlider";
import NavigationMenu from "./components/NavigationMenu";
import Popup from "./components/PopUp";

import { useState } from "react";
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
  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollIndicator />
      <Accordion />
      <RandomColor />
      <StarRating totalStars={10} />
      <ImageSlider />
      <NavigationMenu />
      <Tabs />
      <Popup />
      <div id="popup" className="p-4 fixed top-4">
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
    </div>
  );
}
