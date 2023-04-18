import React, { useEffect, useState } from "react";
import "../index.css";
const TaskList = (props) => {
  const [itemId, setItemId] = useState("");
  const [toggleAll, setToggleAll] = useState(false);

  /////////////////////////
  const toggleChangeHandler = (event) => {
    setItemId(event.target.dataset.no);
    props.taskList.find(
      (item) => item.id === event.target.dataset.no
    ).isChecked = event.target.checked;
    props.onUpdateTaskList(props.taskList);
  };

  /////////////////////////////

  ////////////////////////////
  const clickHandler = (event) => {
    props.onUpdateTaskList(
      props.taskList.filter((item) => item.id !== event.target.dataset.no)
    );
  };

  //////////////////////////////
  const toggleAllHandler = (event) => {
    if (props.taskList.every((item) => item.isChecked === true)) {
      setToggleAll(false);
      props.onUpdateTaskList(
        props.taskList.map((item) => {
          return { task: item.task, id: item.id, isChecked: false };
        })
      );
    } else {
      setToggleAll(true);
      props.onUpdateTaskList(
        props.taskList.map((item) => {
          return { task: item.task, id: item.id, isChecked: true };
        })
      );
    }
  };

  ////////////////////////////////

  return (
    <section className="main">
      <input checked={toggleAll} className="toggle-all" type="checkbox" />
      <label onClick={toggleAllHandler} htmlFor="toggle-all">
        Mark all as complete
      </label>

      <ul className="todo-list">
        {props.filteredList.map((item) => {
          return (
            <li key={item.id} className={item.isChecked ? "completed" : ""}>
              <div className="view">
                <input
                  data-no={item.id}
                  onChange={toggleChangeHandler}
                  className="toggle"
                  type="checkbox"
                  checked={item.isChecked}
                />
                <label>{item.task}</label>
                <button
                  onClick={clickHandler}
                  data-no={item.id}
                  className="destroy"
                ></button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TaskList;
