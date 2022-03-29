import { deletePlaylistService } from "../../services";

const deletePlaylistHandler = async (playlistID, token, playlistsDispatch) => {
    try {
        const response = await deletePlaylistService(playlistID, token);
        if (response.status === 200) {
            playlistsDispatch({ type: "REMOVE_FROM_PLAYLISTS", payload: response.data.playlists });
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        alert(error);
    }
}

export { deletePlaylistHandler };
