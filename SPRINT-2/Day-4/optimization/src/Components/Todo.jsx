import React, { useState } from 'react';
import { useCallback } from 'react';
import TodoItems from './TodoItems';

const initState = [
    {id: 1, status: false, title: 'Task 1'},
    {id: 2, status: false, title: 'Task 2'},
    {id: 3, status: false, title: 'Task 3'},
]

export const Todo = () => {

    const [todo, setTodo] = useState(initState);
    const [currentTodo, setCurrentTodo] = useState("");

    const handleChange = (e) => {
        setCurrentTodo(e.target.value)
    }
    const handleAdd = () => {
        if(currentTodo) {
            const payload = {
                id: TodoItems.length + 1,
                status: false,
                title: currentTodo
            };

            setTodo([...todo, payload]);
            setCurrentTodo("")
        }
    }


    const toggleStatus = useCallback((id) => {
        let newTodo = todo.map((item => item.id === id ? {...item, status: !item.status} : item));
        setTodo(newTodo);
    },[todo])

    const deleteTask = useCallback((id) => {
        let newTodo = todo.filter((item) => item.id !== id);
        setTodo(newTodo);
    },[todo]);

  return (
    <div>
        <h1>Todo</h1>
        <input type="text" value={currentTodo} onChange={handleChange} />
        <button onClick={handleAdd}>Add</button>
        {todo.length && todo.map((item) => {
            return <TodoItems key={item.id} {...item} toggleStatus={toggleStatus} deleteTask={deleteTask} />
        })}
    </div>
  )
}
