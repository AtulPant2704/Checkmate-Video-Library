import { toast } from "react-toastify";
import { addToWatchLaterService } from "../../services";

const addToWatchLaterHandler = async (
  video,
  watchLaterDispatch,
  token,
  setWatchLaterBtnDisable
) => {
  try {
    setWatchLaterBtnDisable(true);
    const response = await addToWatchLaterService(video, token);
    if (response.status === 201) {
      watchLaterDispatch({
        type: "ADD_TO_WATCHLATER",
        payload: response.data.watchlater,
      });
      toast.success(
        `${video.title.slice(0, 20).trim() + "..."} added to WatchLater`
      );
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  } finally {
    setWatchLaterBtnDisable(false);
  }
};

export { addToWatchLaterHandler };
