import axios from "axios";

const getSingleVideoService = (videoID) => {
    return axios.get(`/api/video/${videoID}`);
}

export { getSingleVideoService };
