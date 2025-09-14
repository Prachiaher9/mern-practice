import { useState } from "react";

function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addToList = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const deleteTask = (deleteIndex) => {
    console.log(deleteIndex,"deleteIndex")
    setTasks(tasks.filter((_, index) => index !== deleteIndex));
  };

  return (
    <div className="Todolist">
      <h1>My List</h1>

      <input
        type="text"
        placeholder="Enter an item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addToList()}
      />

      <button onClick={addToList}>Add to list</button>

      <h2>These are the tasks:</h2>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
