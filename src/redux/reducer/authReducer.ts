type CurrentState = {
    isLoggedIn: boolean,
    currentUser: string
}

type CurrentAction = {
    type: string,
    payload: string
}

const initialState = {
    isLoggedIn: false,
    currentUser: ''
}

const authReducer = (state: CurrentState = initialState, action: CurrentAction) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                isLoggedIn: true,
                currentUser: action.payload

            }
        case 'LOGIN_FAILURE':
            return {
                isLoggedIn: false,
                currentUser: ''
            }
        case 'LOGOUT_SUCCESS':
            return {
                isLoggedIn: false
            }
        default: return state
    }
}

export default authReducer;