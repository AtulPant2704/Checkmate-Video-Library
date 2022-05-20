import { getVideosService } from "../../services";

const getVideos = async (setVideos) => {
  try {
    const response = await getVideosService();
    if (response.status === 200) {
      setVideos(response.data.videos);
    } else {
      throw new Error();
    }
  } catch (error) {
    alert(error);
  }
};

export { getVideos };
