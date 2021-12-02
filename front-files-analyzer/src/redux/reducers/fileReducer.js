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
    FILE_MODULE_DELETE_FILE_BEGIN,
    FILE_MODULE_DELETE_FILE_SUCCESS,
    FILE_MODULE_DELETE_FILE_FAILURE,
 } from '../actionTypes';
 
 import initialState from '../initialState';
 
 export const fileReducer = (state = initialState.file, action) => {
     switch (action.type) {
        case FILE_MODULE_GET_ONE_FILE_BEGIN:
            return {
                ...state,
                loadingGetOneUser: true,
            };        
        case FILE_MODULE_GET_ONE_FILE_SUCCESS:
            return {
                ...state,
                oneFile: action.file,
            };        
        case FILE_MODULE_GET_ONE_FILE_FAILURE:
            return state;
        case FILE_MODULE_GET_ONE_ANALYZE_FILE_BEGIN: 
            return state; 
        case FILE_MODULE_GET_ONE_ANALYZE_FILE_SUCCESS: 
            return {
                ...state,
                fileAnalyze: action.file,
            }; 
        case FILE_MODULE_GET_ONE_ANALYZE_FILE_FAILURE: 
            return state; 
        case FILE_MODULE_GET_ALL_FILES_BEGIN:
            return {
                ...state,
                loadingGetOneFile: true,
            };
        case FILE_MODULE_GET_ALL_FILES_SUCCESS:
            return {
                ...state,
                files: {
                    data: action.file
                }
            };
        case FILE_MODULE_GET_ALL_FILES_FAILURE:
            return state;
        case FILE_MODULE_UPSERT_FILE_BEGIN:
            return state;
        case FILE_MODULE_UPSERT_FILE_SUCCESS:
            return state;
        case FILE_MODULE_UPSERT_FILE_FAILURE:
            return state;
        case FILE_MODULE_DELETE_FILE_BEGIN:
            return state;
        case FILE_MODULE_DELETE_FILE_SUCCESS:
            return {
                ...state,
                files: {
                    data: state.files.data.filter( file => file._id !== action.id  )
                }
            };
        case FILE_MODULE_DELETE_FILE_FAILURE:
            return state;
         default:
             return state;
     }
 }