import axios from 'axios';
import { toast } from 'react-toastify';
import _ from 'lodash';

import {
    FILE_MODULE_GET_ONE_FILE_BEGIN,
    FILE_MODULE_GET_ONE_FILE_SUCCESS, 
    FILE_MODULE_GET_ONE_FILE_FAILURE,
    FILE_MODULE_GET_ONE_ANALYZE_FILE_BEGIN,
    FILE_MODULE_GET_ONE_ANALYZE_FILE_SUCCESS,
    FILE_MODULE_GET_ONE_ANALYZE_FILE_FAILURE,
    FILE_MODULE_GET_ALL_FILES_BEGIN,
    FILE_MODULE_GET_ALL_FILES_SUCCESS,
    FILE_MODULE_GET_ALL_FILES_FAILURE,
    FILE_MODULE_UPSERT_FILE_BEGIN,
    FILE_MODULE_UPSERT_FILE_SUCCESS,
    FILE_MODULE_UPSERT_FILE_FAILURE,
    FILE_MODULE_UPDATE_FILE_BEGIN,
    FILE_MODULE_UPDATE_FILE_SUCCESS,
    FILE_MODULE_UPDATE_FILE_FAILURE,
    FILE_MODULE_DELETE_FILE_BEGIN,
    FILE_MODULE_DELETE_FILE_SUCCESS,
    FILE_MODULE_DELETE_FILE_FAILURE,
 } from '../actionTypes';

export const getOneFileBegin = () => ({
    type: FILE_MODULE_GET_ONE_FILE_BEGIN,
});

export const getOneFileSuccess = (file) => ({
    type: FILE_MODULE_GET_ONE_FILE_SUCCESS,
    file,
});

export const getOneFileFailure = (error) => ({
    type: FILE_MODULE_GET_ONE_FILE_FAILURE,
    error,
});

export const getOneFileAnalyzeBegin = () => ({
    type: FILE_MODULE_GET_ONE_ANALYZE_FILE_BEGIN,
});

export const getOneFileAnalyzeSuccess = (file) => ({
    type: FILE_MODULE_GET_ONE_ANALYZE_FILE_SUCCESS,
    file,
});

export const getOneFileAnalyzeFailure = (error) => ({
    type: FILE_MODULE_GET_ONE_ANALYZE_FILE_FAILURE,
    error,
});

export const getAllFilesBegin = () => ({
    type: FILE_MODULE_GET_ALL_FILES_BEGIN,
});

export const getAllFilesSuccess = (file) => ({
    type: FILE_MODULE_GET_ALL_FILES_SUCCESS,
    file,
});

export const getAllFilesFailure = (error) => ({
    type: FILE_MODULE_GET_ALL_FILES_FAILURE,
    error,
});

export const upsertFileBegin = () => ({
    type: FILE_MODULE_UPSERT_FILE_BEGIN,
});

export const upsertFileSuccess = (file) => ({
    type: FILE_MODULE_UPSERT_FILE_SUCCESS,
    file,
});

export const upsertFileFailure = () => ({
    type: FILE_MODULE_UPSERT_FILE_FAILURE,
});

export const updateFileBegin = () => ({
    type: FILE_MODULE_UPDATE_FILE_BEGIN,
});

export const updateFileSuccess = (file) => ({
    type: FILE_MODULE_UPDATE_FILE_SUCCESS,
    file,
});

export const updateFileFailure = () => ({
    type: FILE_MODULE_UPDATE_FILE_FAILURE,
});

export const deleteFileBegin = () => ({
    type: FILE_MODULE_DELETE_FILE_BEGIN,
});

export const deleteFileSuccess = (id) => ({
    type: FILE_MODULE_DELETE_FILE_SUCCESS,
    id,
});

export const deleteFileFailure = () => ({
    type: FILE_MODULE_DELETE_FILE_FAILURE,
});

export const getOneFile = (id) => {
    console.log(id)
    return async (dispatch, getState) => {
        await axios({
            method: 'get',
            url: `http://[::1]:3000/files/${id}`,
            headers: getState().auth.request.headers,
            params: {
                filter: { include: ["user"] }
            }
        })
        .then(response => {
            dispatch( getOneFileSuccess(response.data))
          })
        .catch((error) => {
            dispatch( getOneFileFailure(error))
        })    
    }
}

export const getOneFileAnalyze = (id) => {
    console.log(id)
    return async (dispatch, getState) => {
        await axios({
            method: 'get',
            url: `http://[::1]:3000/files/${id}/analyze`,
            headers: getState().auth.request.headers,
        })
        .then(response => {
            dispatch( getOneFileAnalyzeSuccess(response.data))
          })
        .catch((error) => {
            dispatch( getOneFileAnalyzeFailure(error))
        })    
    }
}


export const getAllFiles = () => {
    return async (dispatch, getState) => {
        await axios({
            method: 'get',
            url: `http://[::1]:3000/files`,
            headers: getState().auth.request.headers,
            params: {
                filter: { include: ["user"] }
            }
        })
        .then(response => {
            dispatch( getAllFilesSuccess(response.data))
          })
        .catch((error) => {
            dispatch( getAllFilesFailure(error))
        })    
    }
}

export const createFile = (data) => {
    return async (dispatch, getState) => {
        return axios({
            method: 'post',
            url: `http://[::1]:3000/files`,
            headers: getState().auth.request.headers,
            data
        })
        .then(response => {
            dispatch( upsertFileSuccess(response.data));
            toast.success('Se subio correctamente', {
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
            dispatch( upsertFileFailure(error))
        })    
    }
}

export function deleteFile(id) {
    return (dispatch, getState) => {
        dispatch( deleteFileBegin() );
        return axios({
            method: 'patch',
            url: `http://[::1]:3000/files/${id}`,
            headers: getState().auth.request.headers,
            data: {
                _id: id,
                deleted: true
            }
        }) 
        .then(response => {
            dispatch( deleteFileSuccess(id));
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
            dispatch(deleteFileFailure(error))
        })    
    }
}
