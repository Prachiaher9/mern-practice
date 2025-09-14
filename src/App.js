import logo from "./logo.svg";
import "./App.css";
import Todolist from "./tasks/todolist";
import FetchUsers from "./tasks/FetchUsers";
import UsersWithReducer from "./tasks/UsersWithReducer";

function App() {
  return (
    <div className="App">
      {/* <Todolist /> */}
      {/* <FetchUsers/> */}
      <UsersWithReducer/>
    </div>
  );
}

export default App;
