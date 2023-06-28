import React from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { updatedToDos } from "../Actions/index";

export default function EditForm({
  todoValue,
  setTodoValue,
  setEdit,
  setobj,
  obj,
}) {
  const handleChange = (e) => {
    setTodoValue(e.target.value);
  };
  const dispatch = useDispatch();
  const handleEditTodo = (e) => {
    e.preventDefault();
    const updatedtodo = {
      id: obj.id,
      todo: todoValue,
      completed: obj.completed,
    };
    dispatch(updatedToDos(updatedtodo));
    setobj({ id: "", todo: "", completed: "" });
    setTodoValue("");
    setEdit(false);
  };

  return (
    <div style={{ margin: "20px" }}>
      <form onSubmit={(e) => handleEditTodo(e, obj)}>
        <TextField
          id="outlined-basic"
          label="ToDo"
          variant="outlined"
          value={todoValue}
          onChange={handleChange}
          required
        />
        <Button
          sx={{ marginLeft: "4px", height: "55px" }}
          variant="contained"
          type="submit"
          disabled={todoValue == "" && true}
        >
          Update
        </Button>
      </form>
    </div>
  );
}
