import { toast } from "react-toastify";
import { removeFromHistoryService } from "../../services";

const removeFromHistoryHandler = async (_id, token, historyDispatch) => {
  try {
    const response = await removeFromHistoryService(_id, token);
    if (response.status === 200) {
      historyDispatch({
        type: "REMOVE_FROM_HISTORY",
        payload: response.data.history,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

export { removeFromHistoryHandler };
