import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import TodoItem from "../todoitem/todoItem";
import "./todolist.css";

const TodoList = () => {
  const todos = useSelector((state) => state);

  const todoitem = todos.map((todo, index) => {
    return <TodoItem key={nanoid()} todo={todo} index={index} />;
  });
  
  return (
    <div className="todo_list container">
      <h1 className="todo_list_title">Todo List</h1>
      {todoitem.length?todoitem:<p>No Todo . . .</p>}
    </div>
  );
};
export default TodoList;
