import "./Explore.css";
import { useVideos } from "../../hooks";
import { Drawer, VideoCard } from "../../components";

const Explore = () => {
    const videos = useVideos();

    return (
        <main>
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
                            <VideoCard key={video._id} {...video} />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}

export { Explore };
