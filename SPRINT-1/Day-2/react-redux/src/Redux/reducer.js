import { INCREMENT, DECREMENT, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_ERROR, ADD_TODOS_REQUEST, ADD_TODOS_SUCCESS, ADD_TODOS_ERROR } from "./actionTypes";

const initState = { 
    count: 0,
    todos: [],
    isLoading: false,
    isError: false
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { 
        ...state, 
        count: state.count + action.payload 
    };

    case DECREMENT:
      return { 
        ...state, 
        count: state.count - action.payload 
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
