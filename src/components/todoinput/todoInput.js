import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uniqueid } from "uuid";
import { addtodo } from "../../redux/actions";
import "./todoinput.css";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  return (
    <div className="section_todo_input">
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="todo Item"
        className="todo_input"
      />
      <button
        disabled={!name.length}
        onClick={() => {
          dispatch(
            addtodo({
              id: uniqueid(),
              name: name,
            })
          );
          setName("");
        }}
        className="add_btn"
      >
        Add
      </button>
    </div>
  );
};
export default TodoInput;
