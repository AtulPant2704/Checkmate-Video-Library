import "./Explore.css";
import { Drawer, VideoCard } from "../../components";

const Explore = () => {
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
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                    </div>
                </section>
            </div>
        </main>
    )
}

export { Explore };
