import "./WatchLater.css";
import { playlistImage } from "../../assets";
import { HorizontalVideoCard } from "../../components/index";
import { Drawer } from "../../components";

const WatchLater = () => {
    return (
        <main>
            <div className="watchLaterVideo-page">
                <Drawer />
                <section className="watchLaterVideo-section">
                    <div className="watchLaterVideo-intro">
                        <img src={playlistImage} alt="watch-later-video-image" className="img-responsive" />
                        <h2>Watch Later Videos</h2>
                        <h4>3 videos</h4>
                    </div>
                    <div className="watchLaterVideos-container">
                        <HorizontalVideoCard />
                        <HorizontalVideoCard />
                        <HorizontalVideoCard />
                        <HorizontalVideoCard />
                        <HorizontalVideoCard />
                        <HorizontalVideoCard />
                    </div>
                </section>
            </div>
        </main>
    )
}

export { WatchLater };
