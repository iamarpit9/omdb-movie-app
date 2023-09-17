import "./App.css";
import Home from "./Components/Home";
import MovieState from "./Context/MovieState";

function App() {
  return (
    <>
      <MovieState>
        <Home />
      </MovieState>
    </>
  );
}

export default App;
