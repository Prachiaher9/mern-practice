import logo from "./logo.svg";
import "./App.css";
import Todolist from "./tasks/todolist";
import FetchUsers from "./tasks/FetchUsers";
import UsersWithReducer from "./tasks/UsersWithReducer";
import UseReducerPractice from "./tasks/UseReducerPractice";
import OptimizedUsersList from "./tasks/OptimizedUsersList";

function App() {
  return (
    <div className="App">
      {/* <Todolist /> */}
      {/* <FetchUsers/> */}
      {/* <UsersWithReducer/> */}
      {/* <UseReducerPractice/> */}
      <OptimizedUsersList/>
    </div>
  );
}

export default App;
