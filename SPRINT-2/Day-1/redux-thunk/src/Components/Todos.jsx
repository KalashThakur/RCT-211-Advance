import React, { useEffect } from 'react'
import { TodoInput } from './TodoInput';
import {useDispatch, useSelector} from "react-redux"
import { getTodoError, getTodoRequest, getTodoSuccess } from '../Redux/app/action';
import axios from 'axios';
import { TodoLists } from './TodoLists';

export const Todos = () => {
    const todos = useSelector((state) => state.app.todos);
    const dispatch = useDispatch();

    const getTodo = () => {
        dispatch(getTodoRequest());
        axios.get("http://localhost:8080/todos")
        .then((res) => dispatch(getTodoSuccess(res.data)))
        .catch((err) => dispatch(getTodoError(err)))
    }

    useEffect(() => {
        getTodo();
      
    }, [])

  return (
    <div>
        <h1>Todos</h1>
        <TodoInput />
        <TodoLists todoList={todos} />
    </div>
  )
}
