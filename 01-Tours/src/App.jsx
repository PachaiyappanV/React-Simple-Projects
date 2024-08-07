import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours);
      setTours(tours);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id != id);
    setTours(newTours);
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length == 0) {
    return (
      <main>
        <div className="title">
          <h1>no tours left</h1>
          <button
            type="button"
            className="btn"
            style={{ borderRadius: "0.50rem", marginTop: "2rem" }}
            onClick={() => fetchTours()}
          >
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
