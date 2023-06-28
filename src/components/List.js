import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { completed, removeTodo } from "../Actions/index";

export default function List({ edit, setEdit, setTodoValue, setobj }) {
  const dispatch = useDispatch();
  const handleEdit = (todo) => {
    setEdit(true);
    setTodoValue(todo.todo);
    setobj({ id: todo.id, todo: todo.todo, completed: todo.completed });
  };
  const todo = useSelector((state) => state.reducers);
  return (
    <div>
      {todo.map((todo) => {
        const todoStyle = {
          textDecoration: todo.completed ? "line-through" : "none",
          margin: "20px",
        };
        return (
          <div key={todo.id} style={todoStyle}>
            {todo.todo}
            <Button
              onClick={() => handleEdit(todo)}
              disabled={todo.completed || (edit && true)}
            >
              <EditIcon sx={{ color: todo.completed || edit ? "" : "blue" }} />
            </Button>
            <Button
              disabled={todo.completed || (edit && true)}
              onClick={() => dispatch(completed(todo.id))}
            >
              <DoneIcon sx={{ color: todo.completed || edit ? "" : "green" }} />
            </Button>
            <Button
              onClick={() => dispatch(removeTodo(todo.id))}
              disabled={edit && true}
            >
              <DeleteIcon sx={{ color: edit ? "" : "red" }} />
            </Button>
          </div>
        );
      })}
    </div>
  );
}
