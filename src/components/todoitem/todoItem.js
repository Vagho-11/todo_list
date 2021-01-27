import React from "react";
import { useDispatch } from "react-redux";
import { PropTypes } from "prop-types";
import TodoInput from "../todoinput/todoInput";
import { ReactComponent as Remove } from "../../asents/icons/remove.svg";
import { deletetodo } from "../../redux/actions";
import "./todoitem.css";

const TodoItem = ({ todo, index }) => {
  const dispache = useDispatch();
  return (
    <div className="todo_item">
      <div>#{index + 1}</div>
      <div className="todo_item_title">{todo.name}</div>
      <div className="todo_item_edit">
        <Remove
          onClick={() => dispache(deletetodo(todo.id))}
          className="remov_btn"
        />
      </div>
    </div>
  );
};
TodoInput.propTypes = {
  todo: PropTypes.object,
  index: PropTypes.number,
};
export default TodoItem;
