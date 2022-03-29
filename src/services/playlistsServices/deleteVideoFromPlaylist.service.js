import axios from "axios";

const deleteVideoFromPlaylistService = (playlistID, videoID, token) => {
    return axios.delete(`/api/user/playlists/${playlistID}/${videoID}`, { headers: { authorization: token } })
}

export { deleteVideoFromPlaylistService };
