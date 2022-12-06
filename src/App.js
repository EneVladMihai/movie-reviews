import "./App.css";
import FruitList from "./FruitComponents/FruitList";

function App() {
  return (
    <div className="App">
      <FruitList fruits={['apples', 'oranges', 'grapes']}/>
    </div>
  );
}

export default App;