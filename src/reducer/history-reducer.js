const historyReducer = (state, action) => {
    switch (action.type) {
        case "GET_HISTORY":
            return { ...state, history: action.payload };
        case "ADD_TO_HISTORY":
            return { ...state, history: action.payload };
        case "REMOVE_FROM_HISTORY":
            return { ...state, history: action.payload };
        case "CLEAR_HISTORY":
            return { ...state, history: [] };
        default:
            return state;
    }
}

export { historyReducer };
