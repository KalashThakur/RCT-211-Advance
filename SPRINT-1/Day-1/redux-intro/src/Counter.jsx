import React from 'react'
import { useState } from 'react'
import { store } from './Redux/store'

export const Counter = () => {
    const {dispatch} = store;
    const {counter} = store.getState()
//     const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        // setCounter((prev) => {return prev+1})
        dispatch({type: "INCREMENT", payload: 1})
        console.log(store.getState());
    }

    const handleDecrement = () => {
        // setCounter((prev) => {return prev-1})
        dispatch({type: "DECREMENT", payload: 1})
        console.log(store.getState());
    }

  return (
    <div>
        <h1>Counter: {counter}</h1>
        <button onClick={handleIncrement}>Increment</button>
         <button onClick={handleDecrement}>Decrement</button>
     </div>
  )
}
