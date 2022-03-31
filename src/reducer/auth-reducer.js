const authReducer = (state, action) => {
    switch (action.type) {
        case "SIGN_UP":
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            };
        case "LOGIN":
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            };
        case "LOGOUT":
            return {
                ...state,
                token: null,
                user: null
            };
        case "CHECK_USER":
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        default:
            return state;
    }
}

export { authReducer };
