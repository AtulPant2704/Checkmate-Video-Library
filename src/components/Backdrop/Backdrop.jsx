import "./Backdrop.css";

const Backdrop = ({ setPlaylistModal }) => {
    return (
        <div className="backdrop" onClick={() => setPlaylistModal(false)}></div>
    )
}

export { Backdrop };
