const watchLaterReducer = (state, action) => {
    switch (action.type) {
        case "GET_WATCHLATER":
            return { ...state, watchLater: action.payload };
        case "ADD_TO_WATCHLATER":
            return { ...state, watchLater: action.payload };
        case "REMOVE_FROM_WATCHLATER":
            return { ...state, watchLater: action.payload };
        case "CLEAR_WATCHLATER":
            return { ...state, watchLater: [] };
        default:
            return state;
    }
}

export { watchLaterReducer };
