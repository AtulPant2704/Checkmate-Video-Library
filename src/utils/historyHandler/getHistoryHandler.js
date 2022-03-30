import { getHistoryService } from "../../services";

const getHistoryHandler = async (token, historyDispatch) => {
    if (token) {
        try {
            const response = await getHistoryService(token);
            if (response.status === 200) {
                historyDispatch({ type: "GET_HISTORY", payload: response.data.history })
            } else {
                throw new Error();
            }
        }
        catch (error) {
            alert(error);
        }
    }
}

export { getHistoryHandler }
