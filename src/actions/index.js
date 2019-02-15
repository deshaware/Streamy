import streams from '../api/streams'
import {SIGN_IN,SIGN_OUT} from './types';
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

export const createStream = (formValues) => async dispatch => {
    streams.post('/streams',formValues);
};