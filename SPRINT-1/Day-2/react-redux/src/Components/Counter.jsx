import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Counter = () => {
  const count = useSelector((state) => state.count) //from store
 const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch({type: "INCREMENT", payload: 1})  
    }

    const handleDecrement = () => {
        dispatch({type: "DECREMENT", payload: 1})  
    }

  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
         <button onClick={handleDecrement}>Decrement</button>
     </div>
  )
}
