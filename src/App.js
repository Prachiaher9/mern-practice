import logo from "./logo.svg";
import "./App.css";
import Todolist from "./tasks/todolist";
import FetchUsers from "./tasks/FetchUsers";
import UsersWithReducer from "./tasks/UsersWithReducer";
import UseReducerPractice from "./tasks/UseReducerPractice";
import OptimizedUsersList from "./tasks/OptimizedUsersList";
import DataTable from "./tasks/dataTable";

function App() {
  const columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "role", label: "Role" },
  ];
  const data = [
    { name: "Prachi", email: "prachi@test.com", role: "Developer" },
    { name: "aprachi 2", email: "prachi2@test.com", role: "Designer" },
  ];


  return (
    <div className="App">
      {/* <Todolist /> */}
      {/* <FetchUsers/> */}
      {/* <UsersWithReducer/> */}
      {/* <UseReducerPractice/> */}
      <OptimizedUsersList/>
      {/* <DataTable 
      headers = {columns}
      rows = {data}
      onRowClick={(row) => console.log("Row clicked:", row)} /> */}
    </div>
  );
}

export default App;
