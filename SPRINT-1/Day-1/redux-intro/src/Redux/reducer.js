export const reducer = (oldState, action) => {
    switch(action.type) {
        case "INCREMET": 
           return {...oldState, counter: oldState.counter + action.payload}

           case "DECREMET": 
           return {...oldState, counter: oldState.counter - action.payload}
        default:
            return oldState;
    }
}