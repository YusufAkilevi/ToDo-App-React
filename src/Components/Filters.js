import React, { useEffect, useState } from "react";
import "../index.css";
const Filters = (props) => {
  const [itemLeft, setItemLeft] = useState("");
  const [filterAll, setFilterAll] = useState(true);
  const [filterActive, setFilterActive] = useState(false);
  const [filterCompleted, setFilterCompleted] = useState(false);

  useEffect(() => {
    setItemLeft(
      props.taskList.filter((item) => item.isChecked === false).length
    );
    props.onFiltered(props.taskList);
  }, [props.taskList]);

  const activeClickHandler = () => {
    setFilterActive(true);
    setFilterAll(false);
    setFilterCompleted(false);
    props.onFiltered(props.taskList.filter((item) => item.isChecked === false));
  };
  const allClickHandler = () => {
    props.onFiltered(props.taskList);
    setFilterActive(false);
    setFilterAll(true);
    setFilterCompleted(false);
  };
  const completedClickHandler = () => {
    setFilterActive(false);
    setFilterAll(false);
    setFilterCompleted(true);
    props.onFiltered(props.taskList.filter((item) => item.isChecked === true));
  };
  const clearCompletedHandler = () => {
    props.onUpdateTaskList(
      props.taskList.filter((item) => item.isChecked === false)
    );
    setFilterAll(true);
    setFilterCompleted(false);
  };
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{`${itemLeft} ${itemLeft > 1 ? "items" : "item"} left`}</strong>
      </span>

      <ul className="filters">
        <li>
          <a
            onClick={allClickHandler}
            href="#/"
            className={filterAll ? "selected" : ""}
          >
            All
          </a>
        </li>
        <li>
          <a
            onClick={activeClickHandler}
            href="#/"
            className={filterActive ? "selected" : ""}
          >
            Active
          </a>
        </li>
        <li>
          <a
            onClick={completedClickHandler}
            href="#/"
            className={filterCompleted ? "selected" : ""}
          >
            Completed
          </a>
        </li>
      </ul>

      {props.taskList.some((item) => item.isChecked === true) && (
        <button onClick={clearCompletedHandler} className="clear-completed">
          Clear completed
        </button>
      )}
    </footer>
  );
};
export default Filters;
