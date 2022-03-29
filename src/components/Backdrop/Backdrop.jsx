import "./Backdrop.css";
import { usePlaylistModal } from "../../hooks";

const Backdrop = () => {
    const { playlistModalDispatch } = usePlaylistModal();

    return (
        <div className="backdrop" onClick={() => playlistModalDispatch({ type: "CLOSE_MODAL" })}></div>
    )
}

export { Backdrop };
