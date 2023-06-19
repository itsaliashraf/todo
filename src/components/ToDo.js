import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import { red } from "@mui/material/colors";

export default function ToDo() {
  const [text, setText] = useState("");
  const [savedToDos, setsavedToDos] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    const saveditems = localStorage.getItem("savedToDos");
    if (saveditems) {
      setsavedToDos(JSON.parse(saveditems));
    }
  }, []);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSave = (event) => {
    event.preventDefault();
    if (text !== null) {
      if (editIndex >= 0) {
        const updatedToDos = [...savedToDos];
        if (updatedToDos[editIndex].done == false) {
          updatedToDos[editIndex].text = text;
          setsavedToDos(updatedToDos);
          localStorage.setItem("savedToDos", JSON.stringify(updatedToDos));
          setEditIndex(-1);
          setText("");
        } else if (updatedToDos[editIndex].done == true) {
          setEditIndex(-1);
          setText("");
        }
      } else {
        const updatedTexts = [...savedToDos, { text, done: false }];
        setsavedToDos(updatedTexts);
        localStorage.setItem("savedToDos", JSON.stringify(updatedTexts));
        setEditIndex(-1);
        setText("");
      }
    }
  };

  const handleEdit = (index) => {
    const todoToEdit = savedToDos[index];
    setText(todoToEdit.text);
    setEditIndex(index);
  };
  const handleDone = (index) => {
    const updatedToDos = [...savedToDos];
    updatedToDos[index].done = true;
    setsavedToDos(updatedToDos);
    localStorage.setItem("savedToDos", JSON.stringify(updatedToDos));
    setEditIndex(-1);
    setText("");
  };
  const handleDelete = (index) => {
    const updatedToDos = savedToDos.filter((_, i) => i !== index);
    setsavedToDos(updatedToDos);
    localStorage.setItem("savedToDos", JSON.stringify(updatedToDos));
  };
  return (
    <div style={{ margin: "20px" }}>
      <form onSubmit={handleSave}>
        <TextField
          id="outlined-basic"
          label="ToDo"
          variant="outlined"
          value={text}
          onChange={handleChange}
        />
        <Button
          sx={{ marginLeft: "4px", height: "55px" }}
          variant="contained"
          type="submit"
          disabled={text == "" && true}
        >
          Save
        </Button>
      </form>

      <div>
        {savedToDos.map((savedItem, index) => {
          const todoStyle = {
            textDecoration: savedItem.done ? "line-through" : "none",
          };
          return (
            <div key={index} style={todoStyle}>
              {savedItem.text}
              <Button
                onClick={() => handleEdit(index)}
                disabled={savedItem.done == true && true}
              >
                <EditIcon />
              </Button>
              <Button
                onClick={() => handleDone(index)}
                disabled={savedItem.done}
              >
                <DoneIcon sx={{ color: savedItem.done ? "" : "green" }} />
              </Button>
              <Button onClick={() => handleDelete(index)}>
                <DeleteIcon color="error" />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
