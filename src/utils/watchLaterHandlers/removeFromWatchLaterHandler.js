import { toast } from "react-toastify";
import { removeFromWatchLaterService } from "../../services";

const removeFromWatchLaterHandler = async (_id, token, wacthLaterDispatch) => {
  try {
    const response = await removeFromWatchLaterService(_id, token);
    if (response.status === 200) {
      wacthLaterDispatch({
        type: "REMOVE_FROM_WATCHLATER",
        payload: response.data.watchlater,
      });
      toast.info("Removed from WatchLater");
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error(error.respone.data.errors[0]);
  }
};

export { removeFromWatchLaterHandler };
