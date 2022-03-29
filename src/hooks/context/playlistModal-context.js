import { createContext, useContext, useReducer } from "react";
import { playlistModalReducer } from "../reducer/playlistModal-reducer";

const PlaylistModalContext = createContext(null);

const PlaylistModalProvider = ({ children }) => {
    const initialState = {
        isActive: false,
        video: {}
    }

    const [playlistModalState, playlistModalDispatch] = useReducer(playlistModalReducer, initialState);

    return (
        <PlaylistModalContext.Provider value={{ playlistModalState, playlistModalDispatch }}>
            {children}
        </PlaylistModalContext.Provider>
    )
}

const usePlaylistModal = () => useContext(PlaylistModalContext);

export { PlaylistModalProvider, usePlaylistModal };
