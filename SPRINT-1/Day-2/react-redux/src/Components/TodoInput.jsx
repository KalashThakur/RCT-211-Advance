import React from 'react'
import { useState } from 'react'

export const TodoInput = ({addTodos}) => {
    const [text, setText] = useState("");

    const handleAdd = (e) => {
        const payload = {
            title: text,
            status: false
        }
        addTodos(payload)
    };

  return (
    <div>
        <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder='add something...' />
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}
