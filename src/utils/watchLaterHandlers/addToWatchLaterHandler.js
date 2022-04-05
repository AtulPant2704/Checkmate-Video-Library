import { toast } from "react-toastify";
import { addToWatchLaterService } from "../../services";

const addToWatchLaterHandler = async (video, watchLaterDispatch, token) => {
  try {
    const response = await addToWatchLaterService(video, token);
    if (response.status === 201) {
      watchLaterDispatch({
        type: "ADD_TO_WATCHLATER",
        payload: response.data.watchlater,
      });
      toast.info(`${video.title} added to WatchLater`);
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error.response);
    toast.error(error.response.data.errors[0]);
  }
};

export { addToWatchLaterHandler };
