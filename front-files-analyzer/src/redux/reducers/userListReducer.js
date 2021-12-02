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
    USERLIST_MODULE_DELETE_USERLIST_BEGIN,
    USERLIST_MODULE_DELETE_USERLIST_SUCCESS,
    USERLIST_MODULE_DELETE_USERLIST_FAILURE,
 } from '../actionTypes';
 
 import initialState from './../initialState';
 
 export default function userListReducer (state = initialState.person, action) {
     const bandera = state.persons.bandera;
     switch (action.type) {
        case USERLIST_MODULE_GET_ONE_USERLIST_BEGIN:
            return {
                ...state,
                loadingGetOneUser: true,
            };        
        case USERLIST_MODULE_GET_ONE_USERLIST_SUCCESS:
            return {
                ...state,
                oneUser: action.user,
            };        
        case USERLIST_MODULE_GET_ONE_USERLIST_FAILURE:
            return state;
        case USERLIST_MODULE_GET_ALL_USERLISTS_BEGIN:
            return {
                ...state,
                loadingGetOneUser: true,
            };
        case USERLIST_MODULE_GET_ALL_USERLISTS_SUCCESS:
            return {
                ...state,
                persons: {
                    totalRecords: action.user.length,
                    data: action.user
                },
            };
        case USERLIST_MODULE_GET_ALL_USERLISTS_FAILURE:
            return state;
        case USERLIST_MODULE_UPSERT_USERLIST_BEGIN:
            return state;
        case USERLIST_MODULE_UPSERT_USERLIST_SUCCESS:
            return state;
        case USERLIST_MODULE_UPSERT_USERLIST_FAILURE:
            return state;
        case USERLIST_MODULE_DELETE_USERLIST_BEGIN:
            return state;
        case USERLIST_MODULE_DELETE_USERLIST_SUCCESS:
            return {
                ...state,
                persons: {
                    data: state.persons.data.filter( person => person._id !== action.id )
                }
            };
        case USERLIST_MODULE_DELETE_USERLIST_FAILURE:
            return state;
         default:
             return state;
     }
 }