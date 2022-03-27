import { addToLikesService } from "../../services";

const addToLikesHandler = async (video, likesDispatch, token) => {
    try {
        const response = await addToLikesService(video, token);
        if (response.status === 201) {
            likesDispatch({ type: "LIKES", payload: response.data.likes });
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
