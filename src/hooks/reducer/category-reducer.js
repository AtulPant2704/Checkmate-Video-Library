const categoryReducer = (state, action) => {
    switch (action.type) {
        case "SELECT_CATEGORY":
            return { ...state, category: action.payload };
        case "CLEAR_CATEGORY":
            return { ...state, category: "" };
        default:
            return category;
    }
}

export { categoryReducer };
