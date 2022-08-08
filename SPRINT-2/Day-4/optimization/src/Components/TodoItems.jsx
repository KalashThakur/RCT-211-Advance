import React from 'react';

const expensiveOperation = (ms) => {
    const start = Date.now();
    while(Date.now() - start < ms) {
        continue;
    }
    return true;
}

 const TodoItems = ({id, status, title, toggleStatus, deleteTask}) => {
    // this function is going to take some time for executing
    const isItDone = expensiveOperation(200); // synchronus

    console.log("Rendering Todo", id);
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
        <div style={{marginRight: "20px"}}>{title}</div>
        <div>{status ? "True" : "False"}</div>
        <button onClick={() => toggleStatus(id)}>Toggle</button>
        <button onClick={() => deleteTask(id)}>Delete</button>
    </div>
  )
}

// const shallowEqual = (prevProps, currentProps) => {
//     return (
//         prevProps.id === currentProps.id && prevProps.status === currentProps.status
//     )
// }

// export default React.memo(TodoItems, shallowEqual)
export default React.memo(TodoItems) //after using useCallback

