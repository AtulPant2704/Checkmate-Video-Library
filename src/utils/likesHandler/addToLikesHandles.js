import { addToLikesService } from "../../services";

const addToLikesHandler = async (video, likesDispatch, token) => {
    try {
        const response = await addToLikesService(video, token);
        if (response.status === 201) {
            likesDispatch({ type: "ADD_TO_LIKES", payload: response.data.likes });
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        alert(error);
    }
}

export { addToLikesHandler };
