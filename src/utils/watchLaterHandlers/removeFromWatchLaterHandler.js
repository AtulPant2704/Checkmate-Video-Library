import { removeFromWatchLaterService } from "../../services";

const removeFromWatchLaterHandler = async (_id, token, wacthLaterDispatch) => {
    try {
        const response = await removeFromWatchLaterService(_id, token);
        if (response.status === 200) {
            wacthLaterDispatch({ type: "REMOVE_FROM_WATCHLATER", payload: response.data.watchlater });
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        alert(error);
    }
}

export { removeFromWatchLaterHandler };
