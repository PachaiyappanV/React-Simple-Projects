import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";
import { useGlobalContext } from "./context";

const App = () => {
  const context = useGlobalContext();
  console.log(document.querySelector("body"));
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
};
export default App;
