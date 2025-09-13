import { useState } from "react";

function Todolist() {
  const [lists, setLists] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addToList = () => {
    if (inputValue.trim() !== "") {
      setLists([...lists, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="Todolist">
      <h1>My List</h1>

      <input
        type="text"
        placeholder="Enter an item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={addToList}>Add to list</button>

      <h2>These are the lists:</h2>
      <ul>
        {lists.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
