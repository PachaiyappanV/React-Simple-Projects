import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, HomeLayout } from "./pages";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
