import "./History.css";
import { playlistImage } from "../../assets";
import { HorizontalVideoCard } from "../../components/index";
import { Drawer } from "../../components";

const History = () => {
    return (
        <main>
            <div className="history-page">
                <Drawer />
                <section className="history-section">
                    <div className="history-intro">
                        <img src={playlistImage} alt="history-video-image" className="img-responsive" />
                        <h2>Watch History</h2>
                        <h4>3 videos</h4>
                    </div>
                    <div className="historyVideos-container">
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

export { History };
