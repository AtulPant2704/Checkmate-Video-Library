import { useEffect } from "react";
import { useLikes, useAuth } from "../../context";
import { getLikesHandler } from "../../utils";
import { Drawer, HorizontalVideoCard } from "../../components";
import { playlistImage } from "../../assets";
import "./LikedVideos.css";

const LikedVideos = () => {
  const {
    likesState: { likes },
    likesDispatch,
  } = useLikes();
  const {
    authState: { token },
  } = useAuth();

  useEffect(() => getLikesHandler(token, likesDispatch), []);

  return (
    <>
      <main>
        <div className="likedVideo-page">
          <Drawer />
          <section className="likedVideo-section">
            <div className="likeVideo-intro">
              <img
                src={playlistImage}
                alt="liked-video-image"
                className="img-responsive"
              />
              <h2>Liked Videos</h2>
              <h4>{likes.length} Videos</h4>
            </div>
            <div className="likedVideos-container">
              {likes.length > 0 ? (
                likes.map((video) => (
                  <HorizontalVideoCard key={video._id} {...video} />
                ))
              ) : (
                <div className="empty-likes">
                  <h2>No Liked Videos.</h2>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export { LikedVideos };
