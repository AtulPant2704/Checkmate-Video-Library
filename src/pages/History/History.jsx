import { useEffect } from "react";
import { toast } from "react-toastify";
import { useHistory, useAuth } from "../../context";
import { getHistoryHandler, deleteAllHistoryHandler } from "../../utils";
import { Navbar, Footer, Drawer, HorizontalVideoCard } from "../../components";
import { playlistImage } from "../../assets";
import "./History.css";

const History = () => {
  const {
    authState: { token },
  } = useAuth();
  const {
    historyState: { history },
    historyDispatch,
  } = useHistory();

  const callDeleteAllHistoryHandler = () => {
    if (history.length > 0) {
      deleteAllHistoryHandler(token, historyDispatch);
    } else {
      toast.info("Nothing to delete");
    }
  };

  useEffect(() => getHistoryHandler(token, historyDispatch), []);

  return (
    <>
      <Navbar />
      <main>
        <div className="history-page">
          <Drawer />
          <section className="history-section">
            <div className="history-intro">
              <img
                src={playlistImage}
                alt="history-video-image"
                className="img-responsive"
              />
              <h2>Watch History</h2>
              <h4>{history.length} videos</h4>
              <button
                className="btn btn-text-icon btn-text-icon-primary delete-history-btn"
                onClick={callDeleteAllHistoryHandler}
              >
                <i className="fas fa-trash-alt"></i> Clear
              </button>
            </div>
            <div className="historyVideos-container">
              {history.length > 0 ? (
                history.map((video) => (
                  <HorizontalVideoCard key={video._id} {...video} />
                ))
              ) : (
                <div className="empty-history">
                  <h2>No videos in history.</h2>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export { History };
