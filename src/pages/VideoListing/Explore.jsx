import "./Explore.css";
import { useState } from "react"
import { useVideos } from "../../hooks";
import { Drawer, VideoCard, Backdrop, CreatePlaylistModal } from "../../components";

const Explore = () => {
    const [playlistModal, setPlaylistModal] = useState(false);
    const videos = useVideos();

    return (
        <main>
            {playlistModal ? <CreatePlaylistModal setPlaylistModal={setPlaylistModal} /> : null}
            {playlistModal ? <Backdrop setPlaylistModal={setPlaylistModal} /> : null}
            <div className="explore-page">
                <Drawer />
                <section className="videos-section">
                    <div className="video-categories">
                        <button className="btn btn-outline-primary">All</button>
                        <button className="btn btn-outline-primary">Openings</button>
                        <button className="btn btn-outine-primary">Endgames</button>
                        <button className="btn btn-outline-primary">Middle Games</button>
                        <button className="btn btn-outline-primary">Classics</button>
                    </div>
                    <div className="videos-container">
                        {videos.map(video => (
                            <VideoCard key={video._id} {...video} setPlaylistModal={setPlaylistModal} />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}

export { Explore };
