import actions from './actions';


export default (state = initalState, action) => {
    switch(action.type) {
        case actions.SET_TOKEN:
            return applySetToken(state);
        case actions.SET_ID:
            return applySetId(state);
        case actions.SET_PW:
            return applySetPw(state);
        case actions.SET_EMAIL:
            return applySetEmail(state);
        case actions.GET_USER:
            return action.payload;
        case actions.LOGIN:
            return applyLoginRequest(state);
        case actions.LOGIN_FAILURE:
            return applyLoginFailure(state);
        case actions.LOGIN_SUCCESS:
            return applyLoginSuccess(state, action);
        default:
            return state;
    }
}

const initalState = {
    isLoggedIn: false,
    fetchingUpadate: false,
    user: {},
    token: null
}

// reducer apply functions

const applyLoginRequest = (state) => {
    return {
        ...state,
        fetchingUpadate: true
    }
}

const applyLoginSuccess = (state, action) => {
    return {
        ...state,
        fetchingUpadate: false,
        isLoggedIn: true,
        user: action.result
    }
}

const applyLoginFailure = (state) => {
    return {
        ...state,
        fetchingUpadate: false
    }
}


const applySetToken = (state) => {
    return {
        ...state
    }
}


const applySetId = (state) => {
    return {
        ...state
    }
}

const applySetPw = (state) => {
    return {
        ...state
    }
}

const applySetEmail = (state) => {
    return {
        ...state
    }
}
