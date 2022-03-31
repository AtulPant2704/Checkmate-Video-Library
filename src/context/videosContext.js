import { createContext, useContext, useState, useEffect } from "react";
import { getVideos } from "../utils";

const VideosContext = createContext(null);

const VideosProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => getVideos(setVideos), []);

    return (
        <VideosContext.Provider value={videos}>
            {children}
        </VideosContext.Provider>
    )
}

const useVideos = () => useContext(VideosContext);

export { VideosProvider, useVideos };
