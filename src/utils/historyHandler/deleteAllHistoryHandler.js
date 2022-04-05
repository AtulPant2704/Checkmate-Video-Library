import { toast } from "react-toastify";
import { deleteAllHistoryService } from "../../services";

const deleteAllHistoryHandler = async (token, historyDispatch) => {
  try {
    const response = await deleteAllHistoryService(token);
    if (response.status === 200) {
      historyDispatch({ type: "CLEAR_HISTORY" });
      toast.info("Cleared all History");
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

export { deleteAllHistoryHandler };
