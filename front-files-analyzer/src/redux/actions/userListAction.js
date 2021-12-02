import axios from "axios";
import { toast } from "react-toastify";
import {
    USERLIST_MODULE_GET_ONE_USERLIST_BEGIN,
    USERLIST_MODULE_GET_ONE_USERLIST_SUCCESS,
    USERLIST_MODULE_GET_ONE_USERLIST_FAILURE,
    USERLIST_MODULE_GET_ALL_USERLISTS_BEGIN,
    USERLIST_MODULE_GET_ALL_USERLISTS_SUCCESS,
    USERLIST_MODULE_GET_ALL_USERLISTS_FAILURE,
    USERLIST_MODULE_UPSERT_USERLIST_BEGIN,
    USERLIST_MODULE_UPSERT_USERLIST_SUCCESS,
    USERLIST_MODULE_UPSERT_USERLIST_FAILURE,
    USERLIST_MODULE_UPDATE_USERLIST_BEGIN,
    USERLIST_MODULE_UPDATE_USERLIST_SUCCESS,
    USERLIST_MODULE_UPDATE_USERLIST_FAILURE,
} from "../actionTypes";



export const getOneUserBegin = () => ({
    type: USERLIST_MODULE_GET_ONE_USERLIST_BEGIN,
});

export const getOneUserSuccess = (user) => ({
    type: USERLIST_MODULE_GET_ONE_USERLIST_SUCCESS,
    user,
});

export const getOneUserFailure = (error) => ({
    type: USERLIST_MODULE_GET_ONE_USERLIST_FAILURE,
    error,
});

export const getAllUsersBegin = () => ({
    type: USERLIST_MODULE_GET_ALL_USERLISTS_BEGIN,
});

export const getAllUsersSuccess = (user) => ({
    type: USERLIST_MODULE_GET_ALL_USERLISTS_SUCCESS,
    user,
});

export const getAllUsersFailure = (error) => ({
    type: USERLIST_MODULE_GET_ALL_USERLISTS_FAILURE,
    error,
});

export const upsertUserBegin = () => ({
    type: USERLIST_MODULE_UPSERT_USERLIST_BEGIN,
});

export const upsertUserSuccess = (user) => ({
    type: USERLIST_MODULE_UPSERT_USERLIST_SUCCESS,
    user,
});

export const upsertUserFailure = () => ({
    type: USERLIST_MODULE_UPSERT_USERLIST_FAILURE,
});

export const updateUserBegin = () => ({
    type: USERLIST_MODULE_UPDATE_USERLIST_BEGIN,
});

export const updateUserSuccess = (user) => ({
    type: USERLIST_MODULE_UPDATE_USERLIST_SUCCESS,
    user,
});

export const updateUserFailure = () => ({
    type: USERLIST_MODULE_UPDATE_USERLIST_FAILURE,
});

export function getAllUsers() {
    return(dispatch, getState) => {
        dispatch( getAllUsersBegin() );
        axios({
            method: 'get',
            url: 'http://[::1]:3000/users',
            headers: getState().auth.request.headers,
        }) 
        .then(response => {
            console.log(response);
            dispatch( getAllUsersSuccess(response.data))
          })
        .catch((error) => {
            dispatch( getAllUsersFailure(error))
        })
    }
}

export function getOneUser(id) {
    return (dispatch, getState) => {
        dispatch( getOneUserBegin() );
        axios({
            method: 'get',
            url: `http://[::1]:3000/users/${id}`,
            headers: getState().auth.request.headers,
        }) 
        .then(response => {
            dispatch( getOneUserSuccess(response.data))
          })
        .catch((error) => {
            dispatch( getOneUserFailure(error))
        })    
    }
}


export function createUser(data) {
    data.user_level = parseInt(data.user_level, 10);
    return async (dispatch, getState) => {
        dispatch( upsertUserBegin() );
        return axios({
            method: 'post',
            url: `http://[::1]:3000/users`,
            headers: getState().auth.request.headers,
            data
        }) 
        .then(response => {
            dispatch( upsertUserSuccess(response.data));
            toast.success('Se creo correctamente', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            console.log("hola");
            return true;

          })
        .catch((error) => {
            dispatch( upsertUserFailure(error))
        })    
    }
}

export function updateUser(data) {
    const id = data._id;
    return (dispatch, getState) => {
        dispatch( upsertUserBegin() );
        axios({
            method: 'patch',
            url: `http://[::1]:3000/users/${id}`,
            headers: getState().auth.request.headers,
            data
        }) 
        .then(response => {
            dispatch( upsertUserSuccess(response.data));
            toast.success('Se actualizo correctamente', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
          })
        .catch((error) => {
            dispatch( upsertUserFailure(error))
        })    
    }
}
