import React, { useEffect, useState } from "react";
import AddTask from "./Components/AddTask";
import "./index.css";
import TaskList from "./Components/TaskList";
import Filters from "./Components/Filters";
import Info from "./Components/Info";
function App() {
  const [taskList, setTaskList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const addTaskHandler = (enteredTask) => {
    setTaskList((prevList) => [
      ...prevList,
      { task: enteredTask, id: Math.random().toString(), isChecked: false },
    ]);
  };

  const updateTaskList = (taskList) => {
    setTaskList([...taskList]);
    setFilteredList([...taskList]);
  };
  const filteredTaskList = (filtList) => {
    setFilteredList(filtList);
  };

  return (
    <>
      <section className="todoapp">
        <AddTask onAddTask={addTaskHandler} />
        <TaskList
          filteredList={filteredList}
          onUpdateTaskList={updateTaskList}
          taskList={taskList}
        />
        {taskList.length > 0 ? (
          <Filters
            onUpdateTaskList={updateTaskList}
            onFiltered={filteredTaskList}
            taskList={taskList}
          />
        ) : (
          ""
        )}
      </section>
      <Info />
    </>
  );
}

export default App;
