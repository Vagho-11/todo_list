import { ADD_TODO, DELETE_TODO } from "./actions";
import { initialState } from "../utils/todos";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      state = [...state];
      state.push(action.payload);
      return state;
    case DELETE_TODO:
      state = [...state];
      state = state.filter((todo) => todo.id !== action.payload);
      return state;
  }
  return state;
};

export default reducer;
