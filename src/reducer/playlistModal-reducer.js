const playlistModalReducer = (state, action) => {
    switch (action.type) {
        case "OPEN_MODAL":
            return { ...state, isActive: action.payload.isActive, video: action.payload.video };
        case "CLOSE_MODAL":
            return { ...state, isActive: false, video: {} };
        default:
            return state;
    }
}

export { playlistModalReducer };
