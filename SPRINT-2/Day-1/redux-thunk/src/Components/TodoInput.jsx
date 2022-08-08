import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoError, addTodoRequest, addTodoSuccess } from "../Redux/app/action";

export const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const todos = useSelector((state) => state.app.todos);
  const dispatch = useDispatch();

  const addTodo = (payload) => {
    dispatch(addTodoRequest());
    axios.post("http://localhost:8080/todos", payload)
    .then((res) => dispatch(addTodoSuccess(res.data)))
    .catch((err) => dispatch(addTodoError(err)))
  }

  const handleAdd = () => {
    if(todo) {
      const payload = {
        title: todo,
        status: false,
      }
      addTodo(payload);
      setTodo("")
    }
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="add something..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
