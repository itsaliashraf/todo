export const AddTodo = "addTodo";
export const RemoveTodo = "removeTodo";
export const UpdatedToDos = "updatedToDos";
export const Completed = "completed";
export const PageReload = "pagereload";

export const addTodo = (payload) => {
  return {
    type: AddTodo,
    payload,
  };
};
export const removeTodo = (payload) => {
  return {
    type: RemoveTodo,
    payload,
  };
};
export const updatedToDos = (payload) => {
  return {
    type: UpdatedToDos,
    payload,
  };
};
export const completed = (payload) => {
  return {
    type: Completed,
    payload,
  };
};
export const pagereload = (payload) => {
  return {
    type: PageReload,
    payload,
  };
};
