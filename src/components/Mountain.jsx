import React from "react";
// import Countries from "./Countries";
import HeadBand from "./HeadBand";
import TodoList from "./ToDoList";
import "../styles/index.css";
import sport from "../assets/sport-hiver.jpeg";

const Mountain = () => {
  return (
    <div>
      <HeadBand />

      <div className="todo-app">
        <img src={sport} alt="sport" />
        <TodoList />
      </div>
    </div>
  );
};

export default Mountain;
