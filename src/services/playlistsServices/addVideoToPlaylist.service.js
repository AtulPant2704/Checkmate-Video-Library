import axios from "axios";

const addVideoToPlaylistService = (playlistID, video, token) => {
    return axios.post(`/api/user/playlists/${playlistID}`, { video }, { headers: { authorization: token } });
}

export { addVideoToPlaylistService };
