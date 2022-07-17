import React, { useState } from "react";

function ToDo() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addNewTask = () => {
    setTask([...task, newTask]);
  };
  return (
    <div>
      <input
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      ></input>
      <button onClick={addNewTask}>Add</button>

      {task.map((test) => {
        return <p>{test}</p>;
      })}
    </div>
  );
}

export default ToDo;
