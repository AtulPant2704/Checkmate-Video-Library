import axios from "axios";

const getSlicedVideosService = (pageNumber) => {
  const limit = 4;
  return axios.get(`/api/videos/${limit}/${pageNumber}`);
};

export { getSlicedVideosService };
