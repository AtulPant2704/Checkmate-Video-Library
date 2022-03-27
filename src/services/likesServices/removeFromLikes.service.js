import axios from "axios";

const removeFromLikesService = (_id, token) => {
    return axios.delete(`/api/user/likes/${_id}`, { headers: { authorization: token } })
}

export { removeFromLikesService };
