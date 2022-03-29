import { deleteVideoFromPlaylistService } from "../../services";

const deleteVideoFromPlaylistHandler = async (playlistID, videoID, token, playlistsDispatch) => {
    try {
        const response = await deleteVideoFromPlaylistService(playlistID, videoID, token);
        if (response.status === 200) {
            playlistsDispatch({ type: "REMOVE_VIDEO_FROM_PLAYLISTS", payload: { playlistId: response.data.playlist._id, playlistData: response.data.playlist } });
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        alert(error);
    }
}

export { deleteVideoFromPlaylistHandler };
