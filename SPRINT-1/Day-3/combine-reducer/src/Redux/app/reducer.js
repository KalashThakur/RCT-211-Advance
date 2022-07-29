// import { loadData, saveData } from "./../utils/localStorage";
import { loadData, saveData } from "../../utils/localStorage";
import { INCREMENT, DECREMENT, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_ERROR, ADD_TODOS_REQUEST, ADD_TODOS_SUCCESS, ADD_TODOS_ERROR } from "./actionTypes";

const initState = { 
    count: loadData("count") || 0,
    todos: [],
    isLoading: false,
    isError: false
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      const localIncCount = state.count + action.payload 
      saveData("count", localIncCount)
      return { 
        ...state, 
        count: localIncCount
    };

    case DECREMENT:
      const localDecCount = state.count - action.payload 
      saveData("count", localDecCount)
      return { 
        ...state, 
        count: localDecCount 
    };

    case GET_TODOS_REQUEST:
      return { 
        ...state, 
        isLoading: true
    };

    case GET_TODOS_SUCCESS:
      return { 
        ...state, 
        todos: [...action.payload],
        isLoading: false,
        isError: false
    };

    case GET_TODOS_ERROR:
      return { 
        ...state, 
        todos: [],
        isLoading: false,
        isError: true
    };

    
    // ***************ADD TO SERVER******************************

    case ADD_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case ADD_TODOS_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        isLoading: false,
        isError: false,
      };

    case ADD_TODOS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };


    default:
      return state;
  }
};
