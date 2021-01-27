import React from "react";
import TodoList from "../components/todolist/todolist";
import TodoInput from "../components/todoinput/todoInput";
import './container.css'

const Container = () => {
  return (
    <section className="container main_section">
      <TodoInput />
      <TodoList />
    </section>
  );
};
export default Container;
