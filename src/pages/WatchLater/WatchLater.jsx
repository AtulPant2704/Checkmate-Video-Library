import "./WatchLater.css";
import { useEffect } from "react";
import { playlistImage } from "../../assets";
import { useWatchLater, useAuth } from "../../context";
import { Drawer, HorizontalVideoCard } from "../../components";
import { getWatchLaterHandler } from "../../utils";

const WatchLater = () => {
    const { authState: { token } } = useAuth();
    const { watchLaterState: { watchLater }, watchLaterDispatch } = useWatchLater();

    useEffect(() => getWatchLaterHandler(token, watchLaterDispatch), [])

    return (
        <main>
            <div className="watchLaterVideo-page">
                <Drawer />
                <section className="watchLaterVideo-section">
                    <div className="watchLaterVideo-intro">
                        <img src={playlistImage} alt="watch-later-video-image" className="img-responsive" />
                        <h2>Watch Later Videos</h2>
                        <h4>{watchLater.length} Videos</h4>
                    </div>
                    <div className="watchLaterVideos-container">
                        {watchLater.length > 0 ?
                            watchLater.map(video => (
                                <HorizontalVideoCard key={video._id} {...video} />
                            )) :
                            <div className="empty-likes">
                                <h2>No videos in Watch Later.</h2>
                            </div>}
                    </div>
                </section>
            </div>
        </main>
    )
}

export { WatchLater };
