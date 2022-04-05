import { toast } from "react-toastify";
import { addToLikesService } from "../../services";

const addToLikesHandler = async (video, likesDispatch, token) => {
  try {
    const response = await addToLikesService(video, token);
    if (response.status === 201) {
      likesDispatch({ type: "ADD_TO_LIKES", payload: response.data.likes });
      toast.info(`${video.title.slice(0, 20).trim() + "..."} added to likes`);
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

export { addToLikesHandler };
