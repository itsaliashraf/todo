import {
  AddTodo,
  RemoveTodo,
  UpdatedToDos,
  Completed,
  PageReload,
} from "../Actions/index";
import {
  saveDataToLocalStorage,
  getDataFromLocalStorage,
} from "../utils/localStorage";

const todosLocalStorageKey = "savedToDos";
const savedTodos = [];
export const reducers = (state = savedTodos, action) => {
  switch (action.type) {
    case AddTodo:
      const updatedToDos = [...state, action.payload];
      saveDataToLocalStorage(todosLocalStorageKey, updatedToDos);
      return updatedToDos;
    case RemoveTodo:
      const filteredtodos = state.filter(
        (current) => current.id !== action.payload
      );
      saveDataToLocalStorage(todosLocalStorageKey, filteredtodos);
      return filteredtodos;
    case UpdatedToDos:
      const updatedtodos = state.map((todo) => {
        if (todo.id === action.payload.id) {
          console.log(todo, action.payload);
          return { ...todo, todo: action.payload.todo };
        }
        return todo;
      });
      saveDataToLocalStorage(todosLocalStorageKey, updatedtodos);
      return updatedtodos;

    case Completed:
      const updatedState = state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: true };
        }
        return todo;
      });
      saveDataToLocalStorage(todosLocalStorageKey, updatedState);
      return updatedState;

    case PageReload:
      return getDataFromLocalStorage("savedToDos");

    default:
      return state;
  }
};
