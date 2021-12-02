
import {
    USER_MODULE_USER_LOGIN_BEGIN,
    USER_MODULE_USER_LOGIN_SUCCESS,
    USER_MODULE_USER_LOGIN_FAILURE,
    USER_MODULE_USER_LOGOUT_BEGIN,
    USER_MODULE_USER_LOGOUT_SUCCESS,
    USER_MODULE_USER_LOGOUT_FAILURE,
} from '../actionTypes';
  
import initialState from '../initialState';


export default function userReducer(state = initialState.user, action) {
    switch (action.type) {
        case USER_MODULE_USER_LOGIN_BEGIN:
          return {
            ...state,
            loading: true
          };
        case USER_MODULE_USER_LOGIN_SUCCESS: {
          return {
            ...state,
            user: action.user,
            request: {
              ...state.request,
              headers:{
                ...state.request.headers,
                Authorization: `Bearer ${action.token}`,
              },
            },
            loading: false,
            isAuthenticated: true,
          };
        }
        case USER_MODULE_USER_LOGIN_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.error || "algun error"
          };
        case USER_MODULE_USER_LOGOUT_BEGIN:
          return {
            ...state,
            loading: true
          };
        case USER_MODULE_USER_LOGOUT_SUCCESS:
          return {
            ...state,
            loading: false,
            isAuthenticated: false,
            role: ""
          };
        case USER_MODULE_USER_LOGOUT_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.error || 'Se ha generado algun error'
          };
        default:
          return state;
      }
};
