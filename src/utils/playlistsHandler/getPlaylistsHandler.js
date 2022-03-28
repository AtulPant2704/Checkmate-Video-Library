import { getPlaylistsService } from "../../services";

const getPlaylistsHandler = async (token, playlistsDispatch) => {
    if (token) {
        try {
            const response = await getPlaylistsService(token);
            if (response.status === 200) {
                playlistsDispatch({ type: "GET_PLAYLISTS", payload: response.data.playlists })
            } else {
                throw new Error();
            }
        }
        catch (error) {
            alert(error);
        }
    }
}

export { getPlaylistsHandler }
