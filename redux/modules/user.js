// imports
import {AsyncStorage} from 'react-native';
import {authApi, endPoints} from '../../constants/api';

// Actions
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const SET_USER = 'SET_USER';
const SET_PROFILE = 'SET_PROFILE';


// Action Creators
function setLogin(token) {
    return {
        type: LOGIN,
        token
    }
}

function setLogout() {
    return { type: LOGOUT }
}

function setUser(account) {
    return { 
        type: SET_USER,
        account
    }
}


// API actions
function login(username, password) {
    return dispatch => authApi.post(endPoints.login, {
        username, password
    }).then(response => {
        const {access: token, account} = response.data;
        if (token && account) {
            account.password = password;
            dispatch(setUser(account));
            dispatch(setLogin(token));
            return true
        } else {
            console.log('access 또는 account가 제공되지 않음');
            return false;
        }
    })
}


// Initial State
const initialState = {
    isLoggedIn: false,
    access: ''
}

// Reducer

function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return applyLogin(state, action);
        case LOGOUT:
            return applyLogout();
        case SET_USER:
            return applySetUser(state, action);
        default:
            return state;
    }
}

// Reducer Functions

const applyLogin = (state, action) => {
    const {access} = action;
    return {
        ...state,
        isLoggedIn: true,
        access
    }
}

const applyLogout = () => {
    AsyncStorage.clear();
    console.log(state);
    return {
        isLoggedIn: false,
        access: ''
    }
}

const applySetUser = (state, action) => {
    const {account} = action
    return {
        ...state,
        account
    };
}

// Export

export const actionCreators = {
    login,
    setLogout
}

// Default export reducer

export default reducer;