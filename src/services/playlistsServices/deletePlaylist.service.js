import axios from "axios";

const deletePlaylistService = (playlistID, token) => {
    return axios.delete(`/api/user/playlists/${playlistID}`, { headers: { authorization: token } })
}

export { deletePlaylistService };
