import "./History.css";
import { useEffect } from "react";
import { playlistImage } from "../../assets";
import { HorizontalVideoCard } from "../../components/index";
import { Drawer } from "../../components";
import { useHistory, useAuth } from "../../context";
import { getHistoryHandler, deleteAllHistoryHandler } from "../../utils";

const History = () => {
    const { authState: { token } } = useAuth();
    const { historyState: { history }, historyDispatch } = useHistory();

    const callDeleteAllHistoryHandler = () => {
        deleteAllHistoryHandler(token, historyDispatch);
    }

    useEffect(() => getHistoryHandler(token, historyDispatch), []);

    return (
        <main>
            <div className="history-page">
                <Drawer />
                <section className="history-section">
                    <div className="history-intro">
                        <img src={playlistImage} alt="history-video-image" className="img-responsive" />
                        <h2>Watch History</h2>
                        <h4>{history.length} videos</h4>
                        <button className="btn btn-text-icon btn-text-icon-primary delete-history-btn" onClick={callDeleteAllHistoryHandler}><i className="fas fa-trash-alt"></i> Clear</button>
                    </div>
                    <div className="historyVideos-container">
                        {history.length > 0 ?
                            history.map(video => (
                                <HorizontalVideoCard key={video._id} {...video} />
                            )) :
                            <div className="empty-history">
                                <h2>No videos in history.</h2>
                            </div>}
                    </div>
                </section>
            </div>
        </main>
    )
}

export { History };
