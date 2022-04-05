import { toast } from "react-toastify";
import { addVideoToPlaylistService } from "../../services";

const addVideoToPlaylistHandler = async (
  token,
  playlistID,
  video,
  playlistsDispatch
) => {
  if (token) {
    try {
      const response = await addVideoToPlaylistService(
        playlistID,
        video,
        token
      );
      if (response.status === 201) {
        playlistsDispatch({
          type: "ADD_VIDEO_TO_PLAYLISTS",
          payload: {
            playlistId: response.data.playlist._id,
            playlistData: response.data.playlist,
          },
        });
        toast.info(`${video.title} added to playlist`);
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error(error.response.data.errors[0]);
    }
  }
};

export { addVideoToPlaylistHandler };
