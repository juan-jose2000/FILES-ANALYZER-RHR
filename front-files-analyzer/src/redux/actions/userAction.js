import {
    USER_MODULE_USER_LOGIN_BEGIN,
    USER_MODULE_USER_LOGIN_SUCCESS,
    USER_MODULE_USER_LOGIN_FAILURE,
    USER_MODULE_USER_LOGOUT_BEGIN,
    USER_MODULE_USER_LOGOUT_SUCCESS,
    USER_MODULE_USER_LOGOUT_FAILURE,
} from '../actionTypes';

// ACTIONS TO REDUCER

export const userLoginBegin = () => ({
type: USER_MODULE_USER_LOGIN_BEGIN,
});

export const userLoginSuccess = (user) => ({
    type: USER_MODULE_USER_LOGIN_SUCCESS,
    user,
});
          
export const userLoginFailure = (error) => ({
    type: USER_MODULE_USER_LOGIN_FAILURE,
    error,
});

export const userLogoutBegin = () => ({
    type: USER_MODULE_USER_LOGOUT_BEGIN,
});

export const userLogoutSuccess = () => ({
    type: USER_MODULE_USER_LOGOUT_SUCCESS,
});

export const userLogoutFailure = () => ({
    type: USER_MODULE_USER_LOGOUT_FAILURE,
});


export function userLogout(){
    return (dispatch) => {
        dispatch(userLogoutBegin());
        return dispatch(userLogoutSuccess());
    }
}