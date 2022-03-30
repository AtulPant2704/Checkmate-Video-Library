import { addToWatchLaterService } from "../../services";

const addToWatchLaterHandler = async (video, watchLaterDispatch, token) => {
    try {
        const response = await addToWatchLaterService(video, token);
        if (response.status === 201) {
            watchLaterDispatch({ type: "ADD_TO_WATCHLATER", payload: response.data.watchlater });
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        alert(error);
    }
}

export { addToWatchLaterHandler };
