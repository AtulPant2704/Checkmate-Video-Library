import axios from "axios";

const addToHistoryService = (video, token) => {
    return axios.post("/api/user/history", { video }, { headers: { authorization: token } });
}

export { addToHistoryService };
