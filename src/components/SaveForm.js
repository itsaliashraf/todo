import React from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodo } from "../Actions/index";

export default function SaveForm({ todoValue, setTodoValue }) {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setTodoValue(e.target.value);
  };
  const handleSave = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let toDo = {
      id: time,
      todo: todoValue,
      completed: false,
    };
    setTodoValue("");
    dispatch(addTodo(toDo));
  };

  return (
    <div style={{ margin: "20px" }}>
      <form onSubmit={handleSave}>
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
          Save
        </Button>
      </form>
    </div>
  );
}
