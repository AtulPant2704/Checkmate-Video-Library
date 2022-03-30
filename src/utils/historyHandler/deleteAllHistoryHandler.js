import { deleteAllHistoryService } from "../../services";

const deleteAllHistoryHandler = async (token, historyDispatch) => {
    try {
        const response = await deleteAllHistoryService(token);
        if (response.status === 200) {
            historyDispatch({ type: "CLEAR_HISTORY" });
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        alert(error);
    }
}

export { deleteAllHistoryHandler };
