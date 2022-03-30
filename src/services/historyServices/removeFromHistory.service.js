import axios from "axios";

const removeFromHistoryService = (_id, token) => {
    return axios.delete(`/api/user/history/${_id}`, { headers: { authorization: token } })
}

export { removeFromHistoryService };
