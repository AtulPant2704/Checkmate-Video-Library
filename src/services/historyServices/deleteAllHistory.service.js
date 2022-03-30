import axios from "axios";

const deleteAllHistoryService = (token) => {
    return axios.delete("/api/user/history/all", { headers: { authorization: token } })
}

export { deleteAllHistoryService };
