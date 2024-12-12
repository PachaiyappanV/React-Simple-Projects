import Accordion from "./components/Accordion";
import ImageSlider from "./components/ImageSlider";
import NavigationMenu from "./components/NavigationMenu";

import RandomColor from "./components/RandomColor";
import ScrollIndicator from "./components/ScrollIndicator";
import StarRating from "./components/StarRating";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollIndicator />
      <Accordion />
      <RandomColor />
      <StarRating totalStars={10} />
      <ImageSlider />
      <NavigationMenu />
    </div>
  );
}
