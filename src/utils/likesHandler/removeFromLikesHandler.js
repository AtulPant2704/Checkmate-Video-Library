import { removeFromLikesService } from "../../services";

const removeFromLikesHandler = async (_id, token, likesDispatch) => {
    try {
        const response = await removeFromLikesService(_id, token);
        if (response.status === 200) {
            likesDispatch({ type: "REMOVE_FROM_LIKES", payload: response.data.likes });
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        alert(error);
    }
}

export { removeFromLikesHandler };
