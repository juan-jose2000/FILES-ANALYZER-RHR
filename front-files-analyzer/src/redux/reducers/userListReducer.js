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
 } from '../actionTypes';
 
 import initialState from './../initialState';
 
 export default function userListReducer (state = initialState.person, action) {
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
                // totalRecords: action.plans.totalRecords,
                // getDataOne: action.user,
                // persons: {
                //     ...state.data,
                // },
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
                // totalRecords: action.plans.totalRecords,
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
         default:
             return state;
     }
 }