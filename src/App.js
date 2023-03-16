import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  const handleSelectItem = (item) => {
    console.log("Selected Item:", item);
  };

  return (
    <div>
      <ListGroup
        heading="Cities"
        items={["New York", "San Francisco", "Des Moines", "Idaho", "Delhi"]}
        onSelectedItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
