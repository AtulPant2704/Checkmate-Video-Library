import axios from "axios";

const createNewPlaylistService = (playlist, token) => {
    return axios.post("/api/user/playlists", { playlist }, { headers: { authorization: token } });
}

export { createNewPlaylistService };
