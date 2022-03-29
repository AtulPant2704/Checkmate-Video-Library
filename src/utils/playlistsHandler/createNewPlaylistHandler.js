import { createNewPlaylistService } from "../../services";
import { addVideoToPlaylistHandler } from "./addVideoToPlaylistHandler";
import { getPlaylistsHandler } from "./getPlaylistsHandler";

const createNewPlaylistHandler = async (playlist, playlistsDispatch, token, video) => {
    try {
        const response = await createNewPlaylistService(playlist, token);
        if (response.status === 201) {
            playlistsDispatch({ type: "CREATE_NEW_PLAYLISTS", payload: response.data.playlists });
            const playlists = await getPlaylistsHandler(token, playlistsDispatch);
            const newPlaylist = playlists.find(item => item.title === playlist.title);
            addVideoToPlaylistHandler(token, newPlaylist._id, video, playlistsDispatch)
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
