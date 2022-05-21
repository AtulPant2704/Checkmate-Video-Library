import { getSlicedVideosService } from "../../services";

const getSlicedVideosHandler = async (
  setSlicedVideos,
  setVideosLoader,
  pageNumber
) => {
  try {
    setVideosLoader(true);
    const response = await getSlicedVideosService(pageNumber);
    if (response.status === 200) {
      setSlicedVideos(response.data.videos);
    } else {
      throw new Error();
    }
  } catch (error) {
    alert(error);
  } finally {
    setVideosLoader(false);
  }
};

export { getSlicedVideosHandler };
