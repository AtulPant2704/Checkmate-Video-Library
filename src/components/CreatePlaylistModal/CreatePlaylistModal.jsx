import "./CreatePlaylistModal.css";
import { useState } from "react";
import { useAuth, usePlaylists } from "../../hooks";
import { createNewPlaylistHandler } from "../../utils";

const CreatePlaylistModal = ({ setPlaylistModal }) => {
    const [openCreatePlaylist, setOpenCreatePlaylist] = useState(false);
    const [newPlaylist, setNewPlaylist] = useState({
        title: "",
        description: ""
    })
    const { authState: { token } } = useAuth();
    const { playlistsState: { playlists }, playlistsDispatch } = usePlaylists();

    const playlistNameHandler = (event) => {
        setNewPlaylist({ ...newPlaylist, title: event.target.value })
    }

    const callCreateNewPlaylistHandler = () => {
        createNewPlaylistHandler(newPlaylist, playlistsDispatch, token);
        setOpenCreatePlaylist(false);
    }

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
                {playlists.map(({ _id, title }) => (
                    <div className="playlist" key={_id}>
                        <input type="checkbox" id={_id} />
                        <label htmlFor={_id}>{title}</label>
                    </div>
                ))}
            </div>
            {!openCreatePlaylist ?
                <button className="create-playlist-btn" onClick={() => setOpenCreatePlaylist(true)}>
                    <i className="fa-solid fa-plus"></i>
                    <span> Create New Playlist</span>
                </button> :
                <div className="playlist-input-container">
                    <input type="text" placeholder="Enter Playlist name..." className="new-playlist-name" onChange={playlistNameHandler} />
                    <button className="close-playlist-input" onClick={callCreateNewPlaylistHandler}>Create</button>
                </div>
            }
        </div>
    )
}

export { CreatePlaylistModal };
