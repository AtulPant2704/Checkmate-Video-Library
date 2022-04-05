import { usePlaylistModal } from "../../context";
import "./Backdrop.css";

const Backdrop = () => {
  const { playlistModalDispatch } = usePlaylistModal();

  return (
    <div
      className="backdrop"
      onClick={() => playlistModalDispatch({ type: "CLOSE_MODAL" })}
    ></div>
  );
};

export { Backdrop };
