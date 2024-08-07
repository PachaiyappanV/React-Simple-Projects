import { useState } from "react";
import Menu from "./Menu.jsx";
import Title from "./Title";
import data from "./data.js";

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  return (
    <section className="menu">
      <Title text="our menu" />
      <Menu items={menuItems} />
    </section>
  );
};
export default App;
