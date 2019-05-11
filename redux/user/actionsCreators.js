import actions from './actions';

export const getUser = user => ({
    type: actions.GET_USER,
    payload: user
})

export const setToken = () => {
    return {
        type: actions.SET_TOKEN
    }
}


export const setId = () => {
    return {
        type: actions.SET_ID
    }
}

export const setPw = () => {
    return {
        type: actions.SET_PW
    }
}

export const setEmail = () => {
    return {
        type: actions.SET_EMAIL
    }
}

