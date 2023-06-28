import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { pagereload } from "../Actions/index";
import List from "./List";
import SaveForm from "./SaveForm";
import EditForm from "./EditForm";

export default function ToDo() {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [obj, setobj] = useState({ id: "", todo: "", completed: "" });
  const [todoValue, setTodoValue] = useState("");
  useEffect(() => {
    dispatch(pagereload());
  }, []);

  return (
    <>
      {edit === false ? (
        <SaveForm todoValue={todoValue} setTodoValue={setTodoValue} />
      ) : (
        <EditForm
          todoValue={todoValue}
          setobj={setobj}
          obj={obj}
          setTodoValue={setTodoValue}
          setEdit={setEdit}
        />
      )}
      <List
        edit={edit}
        setEdit={setEdit}
        setTodoValue={setTodoValue}
        setobj={setobj}
      />
    </>
  );
}
