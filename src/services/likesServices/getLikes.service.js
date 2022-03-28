import axios from "axios";

const getLikesService = (token) => {
    return axios.get("/api/user/likes", { headers: { authorization: token } });
}

export { getLikesService };
