import axios from "axios";

const removeFromWatchLaterService = (_id, token) => {
    return axios.delete(`/api/user/watchlater/${_id}`, { headers: { authorization: token } })
}

export { removeFromWatchLaterService };
