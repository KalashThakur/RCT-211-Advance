
import axios from "axios";
import { GET_MUSIC_RECORDS_ERROR, GET_MUSIC_RECORDS_REQUEST, GET_MUSIC_RECORDS_SUCCESS } from "./actionTypes";

export const getMusicRecordRequest = () => ({
    type: GET_MUSIC_RECORDS_REQUEST
})

export const getMusicRecordSuccess = (payload) => ({
    type: GET_MUSIC_RECORDS_SUCCESS,
    payload
})

export const getMusicRecordError = () => ({
    type: GET_MUSIC_RECORDS_ERROR
});

export const getMusicRecords = (params) => (dispatch) => {
    dispatch(getMusicRecordRequest);
    return axios.get("http://localhost:8080/albums", params)
    .then((res) => dispatch(getMusicRecordSuccess(res.data)))
    .catch((err) => dispatch(getMusicRecordError(err)))
}