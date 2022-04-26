import React from "react";
// import Countries from "./Countries";
import HeadBand from "./HeadBand";
import TodoList from "./ToDoList";
import "../styles/index.css";

const Mountain = () => {
  return (
    <div>
      <HeadBand />

      <div className="todo-app">
        <TodoList />
      </div>
    </div>
  );
};

export default Mountain;
