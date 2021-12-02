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
    USERLIST_MODULE_DELETE_USERLIST_BEGIN,
    USERLIST_MODULE_DELETE_USERLIST_SUCCESS,
    USERLIST_MODULE_DELETE_USERLIST_FAILURE,
} from "../actionTypes";

const apiUrl = 'http://[::1]:3000/users';

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

export const getAllUsersSuccess = ({user, count}) => ({
    type: USERLIST_MODULE_GET_ALL_USERLISTS_SUCCESS,
    user,
    count
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

export const deleteUserBegin = () => ({
    type: USERLIST_MODULE_DELETE_USERLIST_BEGIN,
});

export const deleteUserSuccess = (id) => ({
    type: USERLIST_MODULE_DELETE_USERLIST_SUCCESS,
    id,
});

export const deleteUserFailure = () => ({
    type: USERLIST_MODULE_DELETE_USERLIST_FAILURE,
});

export function getAllUsers(filter = {}) {
    return async (dispatch, getState) => {
        dispatch(getAllUsersBegin());
        try {
            const { data: user } = await axios({
                method: 'get',
                url: `${apiUrl}`,
                headers: getState().auth.request.headers,
                params: {
                    filter
                }
            });

            const { data: count } = await axios({
                method: 'get',
                url: `${apiUrl}/count`,
                headers: getState().auth.request.headers,
            });
            
            dispatch(getAllUsersSuccess({user, count: count.count}))
        } catch (e) {
            dispatch(getAllUsersFailure(e))
        }
    }
}

export function getOneUser(id) {
    return (dispatch, getState) => {
        dispatch(getOneUserBegin());
        axios({
            method: 'get',
            url: `${apiUrl}/${id}`,
            headers: getState().auth.request.headers,
        })
            .then(response => {
                dispatch(getOneUserSuccess(response.data))
            })
            .catch((error) => {
                dispatch(getOneUserFailure(error))
            })
    }
}

export function createUser(data) {
    data.user_level = parseInt(data.user_level, 10);
    return async (dispatch, getState) => {
        dispatch(upsertUserBegin());
        return axios({
            method: 'post',
            url: `${apiUrl}`,
            headers: getState().auth.request.headers,
            data
        })
            .then(response => {
                dispatch(upsertUserSuccess(response.data));
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
                dispatch(upsertUserFailure(error))
            })
    }
}

export function updateUser(data) {
    const id = data._id;
    return (dispatch, getState) => {
        dispatch(upsertUserBegin());
        axios({
            method: 'patch',
            url: `${apiUrl}/${id}`,
            headers: getState().auth.request.headers,
            data
        })
            .then(response => {
                dispatch(upsertUserSuccess(response.data));
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
                dispatch(upsertUserFailure(error))
            })
    }
}

export function deleteUser(id) {
    console.log(id);
    return (dispatch, getState) => {
        dispatch(deleteUserBegin());
        return axios({
            method: 'patch',
            url: `${apiUrl}/${id}`,
            headers: getState().auth.request.headers,
            data: {
                _id: id,
                deleted: true
            }
        })
            .then(response => {
                dispatch(deleteUserSuccess(id));
                toast.success('Se elimino correctamente', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                return true;
            })
            .catch((error) => {
                dispatch(deleteUserFailure(error))
            })
    }
}
