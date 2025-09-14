import logo from "./logo.svg";
import "./App.css";
import Todolist from "./tasks/todolist";
import FetchUsers from "./tasks/FetchUsers";

function App() {
  return (
    <div className="App">
      {/* <Todolist /> */}

      <FetchUsers/>
    </div>
  );
}

export default App;
