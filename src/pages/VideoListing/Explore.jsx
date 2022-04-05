import { useState, useEffect } from "react";
import { useCategory } from "../../context";
import { getVideos, getCategoriesHandler, filterVideos } from "../../utils";
import { Drawer, VideoCard } from "../../components";
import "./Explore.css";

const Explore = () => {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const {
    categoryState: { category },
    categoryDispatch,
  } = useCategory();

  const getVideosAndCategories = () => {
    getVideos(setVideos);
    getCategoriesHandler(setCategories);
  };

  useEffect(() => getVideosAndCategories(), []);

  const filteredVideos = filterVideos(category, videos);

  return (
    <main>
      <div className="explore-page">
        <Drawer />
        <section className="videos-section">
          <div className="video-categories">
            <button
              className={`btn btn-outline-primary ${
                category === "" ? "active" : ""
              }`}
              onClick={() => categoryDispatch({ type: "CLEAR_CATEGORY" })}
            >
              All
            </button>
            {categories.map((curr) => (
              <button
                className={`btn btn-outline-primary ${
                  category === curr.categoryName ? "active" : ""
                }`}
                key={curr._id}
                onClick={() =>
                  categoryDispatch({
                    type: "SELECT_CATEGORY",
                    payload: curr.categoryName,
                  })
                }
              >
                {curr.categoryName}
              </button>
            ))}
          </div>
          <div className="videos-container">
            {filteredVideos.map((video) => (
              <VideoCard key={video._id} {...video} videos={videos} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export { Explore };
