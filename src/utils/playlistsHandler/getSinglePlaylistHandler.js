import { getSinglePlaylistService } from "../../services";

const getSinglePlaylistHandler = async (token, playlistID, setPlaylist) => {
    if (token) {
        try {
            const response = await getSinglePlaylistService(token, playlistID);
            if (response.status === 200) {
                setPlaylist(response.data.playlist);
            } else {
                throw new Error();
            }
        }
        catch (error) {
            alert(error);
        }
    }
}

export { getSinglePlaylistHandler }
