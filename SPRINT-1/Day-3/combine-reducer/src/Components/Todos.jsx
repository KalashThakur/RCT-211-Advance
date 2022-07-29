import React from 'react'
import { useEffect } from 'react'
import { TodoInput } from './TodoInput'
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addTodoError, addTodoSuccess, getTodoError, getTodoRequest, getTodoSuccess } from '../Redux/app/action';

export const Todos = () => {

    const dispatch = useDispatch();

    const {todos, isLoading, isError} = useSelector((state) => {
        return {
            todos: state.app.todos,
            isLoading: state.app.isLoading,
            isError: state.app.isError,
        }
    }, shallowEqual);
    // console.log('todos:', todos)

    console.log("I am rendering");

    const getTodo = () => {
        dispatch(getTodoRequest());
       return axios.get("http://localhost:8080/todos")
        .then((res) => {
            dispatch(getTodoSuccess(res.data))
        })
        .catch((err) => {
            dispatch(getTodoError(err))
        })
    }

    const addTodos = (payload) => {
        return axios.post("http://localhost:8080/todos", payload)
        .then((res) => {
            dispatch(addTodoSuccess(res.data))
        })
        .catch((err) => {
            dispatch(addTodoError(err))
        })
    }

    useEffect(() => {
        getTodo();
    },[]);

  return (
    <div>
        <h1>Todos</h1>
        <TodoInput addTodos={addTodos} />
        {todos.length > 0 &&
        todos.map((item)=> {
            return <div key={item.id}>{item.title}</div>
        })}
    </div>
  )
}
