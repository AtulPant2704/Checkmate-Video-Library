import { getVideosService } from "../../services";

const getVideos = async (setVideos, setVideosLoader) => {
  try {
    setVideosLoader(true);
    const response = await getVideosService();
    if (response.status === 200) {
      setVideos(response.data.videos);
      setVideosLoader(false);
    } else {
      throw new Error();
    }
  } catch (error) {
    alert(error);
  }
};

export { getVideos };
