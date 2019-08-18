import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export const getAuthUserData = (userId) => {
    return (dispatch) => {
       return  authAPI.me().then(data => {  // промис уходит в app-reducer
            if (data.resultCode === 0) {
                let {id, login, email} = data.data; // объект формируется axios, обязательно сверится store.getState().auth
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
    }
};

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'; // запрос текста ошибки с АПИ
                dispatch(stopSubmit('login', {_error: message})); // прекращает сабмит формы по имени name и показывает ошибку на всю форму (можно указывать конкретное поле в объекте)
            }
        });
    }
};

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
    }
};

export default authReducer;
