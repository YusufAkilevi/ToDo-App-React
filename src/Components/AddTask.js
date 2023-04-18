import React, { useState } from "react";
import "../index.css";
const AddTask = (props) => {
  const [enteredTask, setEnteredTask] = useState("");
  const taskChangeHandler = (event) => {
    setEnteredTask(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddTask(enteredTask);
    setEnteredTask("");
  };
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={submitHandler}>
          <input
            value={enteredTask}
            onChange={taskChangeHandler}
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
          />
        </form>
      </header>
    </>
  );
};

export default AddTask;
