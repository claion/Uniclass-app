import actions from './actionsCreators';


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
        default:
            return state;
    }
}


// reducer apply functions

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
