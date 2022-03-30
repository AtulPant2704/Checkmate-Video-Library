import { getWatchLaterService } from "../../services";

const getWatchLaterHandler = async (token, watchLaterDispatch) => {
    if (token) {
        try {
            const response = await getWatchLaterService(token);
            if (response.status === 200) {
                watchLaterDispatch({ type: "GET_WATCHLATER", payload: response.data.watchlater })
            } else {
                throw new Error();
            }
        }
        catch (error) {
            alert(error);
        }
    }
}

export { getWatchLaterHandler }
