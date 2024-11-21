import Accordion from "./components/Accordion";
import ImageSlider from "./components/ImageSlider";
import RandomColor from "./components/RandomColor";
import StarRating from "./components/StarRating";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Accordion />
      <RandomColor />
      <StarRating totalStars={10} />
      <ImageSlider />
    </div>
  );
}
