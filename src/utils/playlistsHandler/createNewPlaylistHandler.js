import { createNewPlaylistService } from "../../services";

const createNewPlaylistHandler = async (playlist, playlistsDispatch, token) => {
    try {
        const response = await createNewPlaylistService(playlist, token);
        if (response.status === 201) {
            playlistsDispatch({ type: "CREATE_NEW_PLAYLISTS", payload: response.data.playlists });
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        alert(error);
    }
}

export { createNewPlaylistHandler };
