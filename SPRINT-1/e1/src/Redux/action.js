// Write the action object creators in this file
import { GET_PROFILE_DETAILS_FAILURE, GET_PROFILE_DETAILS_REQUEST, GET_PROFILE_DETAILS_SUCCESS } from "./actionTypes"

// Write the action object creators in this file
export const getDataRequest = () => {
    return {
        type: GET_PROFILE_DETAILS_REQUEST
    }
}

export const getDataSuccess = (payload) => {
    return {
        type: GET_PROFILE_DETAILS_SUCCESS,
        payload
    }
}

export const getDataError = () => {
    return {
        type: GET_PROFILE_DETAILS_FAILURE
    }
}