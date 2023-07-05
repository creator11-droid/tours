import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const Tours = await response.json();
      setTours(Tours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
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
  if (tours.length === 0) {
    return (
      <div className="tile">
        <h2>No Tours left</h2>
        <button
          type="button"
          style={{ marginTop: "2rem" }}
          className="btn btn-block"
          onClick={() => fetchTours()}
        >
          refresh tours
        </button>
      </div>
    );
  }
  return (
    <main>
      <Tours tour={tours} removeTours={removeTours} />
    </main>
  );
}

export default App;
