import axios from "axios";

const addToLikesService = (video, token) => {
    return axios.post("/api/user/likes", { video }, { headers: { authorization: token } });
}

export { addToLikesService };
