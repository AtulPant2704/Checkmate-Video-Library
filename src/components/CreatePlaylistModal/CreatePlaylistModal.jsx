import "./CreatePlaylistModal.css";
import { useState } from "react";

const CreatePlaylistModal = ({ setPlaylistModal }) => {
    const [openCreatePlaylist, setOpenCreatePlaylist] = useState(false);

    return (
        <div className="playlist-modal">
            <div className="playlist-header">
                <h3>Save to...</h3>
                <button className="playlist-modal-close" onClick={() => setPlaylistModal(false)}><i className="fa-solid fa-xmark"></i></button>
            </div>
            <div className="playlist-container">
                <div className="playlist-one">
                    <input type="checkbox" id="watch-later" />
                    <label htmlFor="watch-later">Watch Later</label>
                </div>
                <div className="playlist-one">
                    <input type="checkbox" id="playlist-one" />
                    <label htmlFor="playlist-one">Playlist 1</label>
                </div>
            </div>
            {!openCreatePlaylist ?
                <button className="create-playlist-btn" onClick={() => setOpenCreatePlaylist(true)}>
                    <i className="fa-solid fa-plus"></i>
                    <span> Create New Playlist</span>
                </button> :
                <div className="playlist-input-container">
                    <input type="text" placeholder="Enter Playlist name..." className="new-playlist-name" />
                    <button className="close-playlist-input" onClick={() => setOpenCreatePlaylist(false)}>Create</button>
                </div>
            }
        </div>
    )
}

export { CreatePlaylistModal };
