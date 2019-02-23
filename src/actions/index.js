import streams from '../api/streams'
import {SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from './types';
import history from '../history';

export const signIn = (userId) => {
    console.log("Action called signin")
    return{
        type:SIGN_IN,
        payload:userId
    }
}

export const signOut = () => {
    console.log("Action called signout")
    return{
        type:SIGN_OUT
    }
}
//to map user id with a stream object, we are taking second parameter (dispatch ,get state)
export const createStream = (formValues) => async (dispatch,getState) => {
    const {userId} = getState().auth; 
    const response = await streams.post('/streams',{...formValues, userId});

    dispatch({ type: CREATE_STREAM , payload: response.data});
    //programmatic  navigation to get user to back to root route
    history.push('/');
};

export const fetchStreams = () => async dispatch => {
    console.log("action called fetchstrems");
    const response = await streams.get('/streams');
    dispatch({ type: FETCH_STREAMS , payload:response.data });
};

export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({ type: FETCH_STREAM , payload:response.data });
};

export const editStream = (id,formValues) => async dispatch => {
    const response = await streams.put(`/streams/${id}`, formValues);
    dispatch({ type: EDIT_STREAM , payload:response.data });
};

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/stream/${id}`);
    dispatch({ type: DELETE_STREAM , payload: id });
};

