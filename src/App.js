import React, { useState, useEffect } from "react";
import List from "./List";
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};
function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState(getLocalStorage);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      alert("Invalid Input");
    } else if (task) {
      const newItem = { id: new Date().getTime().toString(), title: task };
      setList([...list, newItem]);
      setTask("");
    }
  };
  const clearList = () => {
    setList([]);
  };
  const removeTask = (id) => {
    setList(list.filter((item) => item.id !== id));
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <section className="section-center">
      <form className="form" onSubmit={handleSubmit}>
        <h3>Todo List</h3>
        <div className="form-control">
          <input
            type="text"
            placeholder="Enter your Tasks here"
            className="input"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            Add
          </button>
        </div>
      </form>
      <div className="container">
        <List items={list} removeTask={removeTask}></List>
        <button type="button" className="clear-btn" onClick={clearList}>
          Clear
        </button>
      </div>
    </section>
  );
}

export default App;
