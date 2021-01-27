export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addtodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};
export const deletetodo = (todoid) => {
  return {
    type: DELETE_TODO,
    payload: todoid,
  };
};
