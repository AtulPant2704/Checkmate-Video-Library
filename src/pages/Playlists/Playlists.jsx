import "./Playlists.css";
import { PlaylistTile } from "./components/PlaylistTile";
import { Drawer } from "../../components";

const Playlists = () => {
    return (
        <main>
            <div className="playlists-page">
                <Drawer />
                <div className="user-playlists">
                    <h2>My Playlists</h2>
                    <div className="playlist-container">
                        <PlaylistTile />
                        <PlaylistTile />
                        <PlaylistTile />
                        <PlaylistTile />
                        <PlaylistTile />
                    </div>
                </div>
            </div>
        </main>
    )
}

export { Playlists };
