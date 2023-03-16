import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div>
      <ListGroup
        heading="Cities"
        items={["New York", "San Francisco", "Des Moines", "Idaho", "Delhi"]}
      />
    </div>
  );
}

export default App;
