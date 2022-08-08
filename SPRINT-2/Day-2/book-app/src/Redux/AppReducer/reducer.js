import { GET_MUSIC_RECORDS_ERROR, GET_MUSIC_RECORDS_REQUEST, GET_MUSIC_RECORDS_SUCCESS } from "./actionTypes";

const initState = {
    isLoading: false,
    isError: false,
    musicRecords: [],
  };
  
  export const reducer = (state = initState, action) => {
    switch (action.type) {
        case GET_MUSIC_RECORDS_REQUEST: 
          return {
            ...state,
            isLoading: true,
            isError: false,
          }

          case GET_MUSIC_RECORDS_SUCCESS: 
          return {
            ...state,
            isLoading: true,
            isError: false,
            musicRecords: action.payload
          }

          case GET_MUSIC_RECORDS_ERROR: 
          return {
            ...state,
            isLoading: false,
            isError: true,
          }
        default: 
           return state;
    }
}