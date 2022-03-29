import "./CreatePlaylistModal.css";
import { useState } from "react";
import { useAuth, usePlaylists, usePlaylistModal } from "../../hooks";
import { createNewPlaylistHandler, addVideoToPlaylistHandler, deleteVideoFromPlaylistHandler } from "../../utils";

const CreatePlaylistModal = () => {
    const [openCreatePlaylist, setOpenCreatePlaylist] = useState(false);
    const [newPlaylist, setNewPlaylist] = useState({
        title: "",
        description: "haha"
    })
    const { authState: { token } } = useAuth();
    const { playlistsState: { playlists }, playlistsDispatch } = usePlaylists();
    const { playlistModalState: { video }, playlistModalDispatch } = usePlaylistModal();

    const playlistNameHandler = (event) => {
        setNewPlaylist({ ...newPlaylist, title: event.target.value })
    }

    const checkPlaylistName = (title) => {
        if (playlists.find(item => item.title === title)) {
            alert("Playlist with same title exists.")
        }
        else if (title === "") {
            alert("Playlist name is required.")
        }
        else {
            return true;
        }
    }

    const callCreateNewPlaylistHandler = () => {
        if (checkPlaylistName(newPlaylist.title)) {
            createNewPlaylistHandler(newPlaylist, playlistsDispatch, token, video);
            setOpenCreatePlaylist(false);
            playlistModalDispatch({ type: "CLOSE_MODAL" })
        }
        setNewPlaylist({ ...newPlaylist, title: "" });
    }

    const checkVideoInPlaylist = (_id) => {
        const playlist = playlists.find(item => item._id === _id);
        const isExist = playlist.videos.find(item => item._id === video._id)
        return isExist ? true : false;
    }

    const callVideoAction = (_id) => {
        if (checkVideoInPlaylist(_id)) {
            deleteVideoFromPlaylistHandler(_id, video._id, token, playlistsDispatch);
        }
        else {
            addVideoToPlaylistHandler(token, _id, video, playlistsDispatch);
        }
    }

    return (
        <div className="playlist-modal">
            <div className="playlist-header">
                <h3>Save to...</h3>
                <button className="playlist-modal-close" onClick={() => playlistModalDispatch({ type: "CLOSE_MODAL" })}><i className="fa-solid fa-xmark"></i></button>
            </div>
            <div className="playlist-container">
                <div className="playlist-one">
                    <input type="checkbox" id="watch-later" />
                    <label htmlFor="watch-later">Watch Later</label>
                </div>
                {playlists.map(({ _id, title }) => (
                    <div className="playlist" key={_id}>
                        <input type="checkbox" id={title} checked={checkVideoInPlaylist(_id)} onChange={() => callVideoAction(_id)} />
                        <label htmlFor={title}>{title}</label>
                    </div>
                ))}
            </div>
            {!openCreatePlaylist ?
                <button className="create-playlist-btn" onClick={() => setOpenCreatePlaylist(true)}>
                    <i className="fa-solid fa-plus"></i>
                    <span> Create New Playlist</span>
                </button> :
                <div className="playlist-input-container">
                    <input type="text" placeholder="Enter Playlist name..." className="new-playlist-name" value={newPlaylist.title} onChange={playlistNameHandler} required />
                    <button className="close-playlist-input" onClick={callCreateNewPlaylistHandler}>Create</button>
                </div>
            }
        </div>
    )
}

export { CreatePlaylistModal };
