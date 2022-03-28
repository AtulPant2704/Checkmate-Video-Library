const playlistsReducer = (state, action) => {
    switch (action.type) {
        case "GET_PLAYLISTS":
            return { ...state, playlists: action.payload };
        case "CREATE_NEW_PLAYLISTS":
            return { ...state, playlists: action.payload };
        case "ADD_VIDEO_TO_PLAYLISTS":
            return { ...state, playlists: action.payload };
        case "REMOVE_VIDEO_FROM_PLAYLISTS":
            return { ...state, playlists: action.payload };
        case "REMOVE_FROM_PLAYLISTS":
            return { ...state, playlists: action.payload };
        case "EMPTY_PLAYLISTS":
            return { ...state, playlists: [] };
        default:
            return state;
    }
}

export { playlistsReducer };
