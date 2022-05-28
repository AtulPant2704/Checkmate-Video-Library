import { getSingleVideoService } from "../../services";

const getSingleVideoHandler = async (videoId, setVideo, navigate) => {
  try {
    const response = await getSingleVideoService(videoId);
    if (response.status === 200) {
      setVideo(response.data.video);
      return response.data.video;
    } else {
      throw new Error();
    }
  } catch (error) {
    console.error(error);
    navigate("*");
  }
};

export { getSingleVideoHandler };
