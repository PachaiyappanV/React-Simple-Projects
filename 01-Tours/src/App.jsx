import { useEffect, useState } from "react";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      console.table(tours);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  return <h2>Tours Starter</h2>;
};
export default App;
