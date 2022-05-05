import { toast } from "react-toastify";
import { removeFromLikesService } from "../../services";

const removeFromLikesHandler = async (
  _id,
  token,
  likesDispatch,
  setLikeBtnDisable
) => {
  try {
    setLikeBtnDisable(true);
    const response = await removeFromLikesService(_id, token);
    if (response.status === 200) {
      likesDispatch({
        type: "REMOVE_FROM_LIKES",
        payload: response.data.likes,
      });
      toast.info("Removed from likes");
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  } finally {
    setLikeBtnDisable(false);
  }
};

export { removeFromLikesHandler };
