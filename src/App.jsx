import AddMovie from "./context-api/AddMovie";
import { MovieProvider } from "./context-api/MovieContext";
import MovieList from "./context-api/MovieList";
import Nav from "./context-api/Nav";

function App() {
  return (
    <MovieProvider className="App">
      <Nav />
      <AddMovie />
      <MovieList />
    </MovieProvider>
  );
}

export default App;
