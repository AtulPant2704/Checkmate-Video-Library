import "./Playlists.css";
import { useEffect, useDebugValue } from "react";
import { usePlaylists, useAuth } from "../../hooks";
import { Drawer } from "../../components";
import { PlaylistTile } from "./components/PlaylistTile";
import { getPlaylistsHandler } from "../../utils";

const Playlists = () => {
    const { authState: { token } } = useAuth();
    const { playlistsState: { playlists }, playlistsDispatch } = usePlaylists();

    useEffect(() => getPlaylistsHandler(token, playlistsDispatch), []);

    return (
        <main>
            <div className="playlists-page">
                <Drawer />
                <div className="user-playlists">
                    <h2>My Playlists ({playlists.length} Playlist)</h2>
                    <div className="playlist-container">
                        {playlists.map(item => (
                            <PlaylistTile key={item._id} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export { Playlists };
