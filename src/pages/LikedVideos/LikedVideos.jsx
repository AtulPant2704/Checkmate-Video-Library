import "./LikedVideos.css";
import { playlistImage } from "../../assets";
import { HorizontalVideoCard } from "../../components/index";
import { Drawer } from "../../components";

const LikedVideos = () => {
    return (
        <main>
            <div className="likedVideo-page">
                <Drawer />
                <section className="likedVideo-section">
                    <div className="likeVideo-intro">
                        <img src={playlistImage} alt="liked-video-image" className="img-responsive" />
                        <h2>Liked Videos</h2>
                        <h4>3 videos</h4>
                    </div>
                    <div className="likedVideos-container">
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

export { LikedVideos };
