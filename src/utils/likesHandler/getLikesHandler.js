import { getLikesService } from "../../services";

const getLikesHandler = async (token, likesDispatch) => {
    if (token) {
        try {
            const response = await getLikesService(token);
            if (response.status === 200) {
                likesDispatch({ type: "GET_LIKES", payload: response.data.likes })
            } else {
                throw new Error();
            }
        }
        catch (error) {
            alert(error);
        }
    }
}

export { getLikesHandler }
