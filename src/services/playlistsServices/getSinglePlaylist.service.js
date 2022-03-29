import axios from "axios";

const getSinglePlaylistService = (token, playlistID) => {
    return axios.get(`/api/user/playlists/${playlistID}`, { headers: { authorization: token } });
}

export { getSinglePlaylistService };
