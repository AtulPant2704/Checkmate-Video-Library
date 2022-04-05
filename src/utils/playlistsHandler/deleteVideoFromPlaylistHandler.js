import { toast } from "react-toastify";
import { deleteVideoFromPlaylistService } from "../../services";

const deleteVideoFromPlaylistHandler = async (
  playlistID,
  videoID,
  token,
  playlistsDispatch
) => {
  try {
    const response = await deleteVideoFromPlaylistService(
      playlistID,
      videoID,
      token
    );
    if (response.status === 200) {
      playlistsDispatch({
        type: "REMOVE_VIDEO_FROM_PLAYLISTS",
        payload: {
          playlistId: response.data.playlist._id,
          playlistData: response.data.playlist,
        },
      });
      toast.info("Video removed from playlist");
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

export { deleteVideoFromPlaylistHandler };
