import axios from "axios";

const getVideosService = () => {
    return axios.get("/api/videos");
}

export { getVideosService };
