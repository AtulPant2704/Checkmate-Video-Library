const notesReducer = (state, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            return { ...state, notes: action.payload }
        case "REMOVE_NOTE":
            return { ...state, notes: action.payload }
        case "UPDATE_NOTE":
            return { ...state, notes: action.payload }
        default:
            return state;
    }
}

export { notesReducer };
