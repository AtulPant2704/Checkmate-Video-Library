import { toast } from "react-toastify";
import { deletePlaylistService } from "../../services";

const deletePlaylistHandler = async (playlistID, token, playlistsDispatch) => {
  try {
    const response = await deletePlaylistService(playlistID, token);
    if (response.status === 200) {
      playlistsDispatch({
        type: "REMOVE_FROM_PLAYLISTS",
        payload: response.data.playlists,
      });
      toast.info("Playlist Successfully deleted");
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

export { deletePlaylistHandler };
