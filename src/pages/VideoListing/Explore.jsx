import { useState, useEffect } from "react";
import { useCategory } from "../../context";
import {
  getVideos,
  getCategoriesHandler,
  filterVideos,
  searchFilter,
} from "../../utils";
import { Navbar, Footer, Drawer, VideoCard } from "../../components";
import "./Explore.css";
import "./loaders.css";

const Explore = () => {
  const [videos, setVideos] = useState([]);
  const [videosLoader, setVideosLoader] = useState(false);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const {
    categoryState: { category },
    categoryDispatch,
  } = useCategory();

  const getVideosAndCategories = () => {
    getVideos(setVideos, setVideosLoader);
    getCategoriesHandler(setCategories);
  };

  useEffect(() => getVideosAndCategories(), []);

  const categoryFilteredVideos = filterVideos(category, videos);
  const searchFilteredVideos = searchFilter(
    categoryFilteredVideos,
    searchQuery
  );

  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
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
              {videosLoader ? (
                <div className="lds-roller">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              ) : searchFilteredVideos.length > 0 ? (
                searchFilteredVideos.map((video) => (
                  <VideoCard key={video._id} {...video} videos={videos} />
                ))
              ) : (
                <h2>No such Videos Exist</h2>
              )}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export { Explore };
