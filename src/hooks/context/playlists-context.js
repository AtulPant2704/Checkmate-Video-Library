import { createContext, useContext, useReducer } from "react";
import { playlistsReducer } from "../reducer/playlists-reducer";

const PlaylistsContext = createContext(null);

const PlaylistsProvider = ({ children }) => {
    const [playlistsState, playlistsDispatch] = useReducer(playlistsReducer, { playlists: [] });

    return (
        <PlaylistsContext.Provider value={{ playlistsState, playlistsDispatch }}>
            {children}
        </PlaylistsContext.Provider>
    )
}

const usePlaylists = () => useContext(PlaylistsContext);

export { PlaylistsProvider, usePlaylists };
