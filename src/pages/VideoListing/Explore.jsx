import { useState, useEffect, useRef } from "react";
import { useCategory } from "../../context";
import {
  getVideos,
  getSlicedVideosHandler,
  getCategoriesHandler,
  filterVideos,
  searchFilter,
} from "../../utils";
import { Navbar, Footer, Drawer, VideoCard, Loader } from "../../components";
import "./Explore.css";
import "./loaders.css";

const Explore = () => {
  const [videos, setVideos] = useState([]);
  const [slicedVideos, setSliceVideos] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [videosLoader, setVideosLoader] = useState(false);
  const loader = useRef(null);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const {
    categoryState: { category },
    categoryDispatch,
  } = useCategory();

  const getVideosAndCategories = () => {
    getVideos(setVideos);
    getCategoriesHandler(setCategories);
  };

  useEffect(() => getVideosAndCategories(), []);

  useEffect(() => {
    const elementRef = loader.current;
    const handleObserver = (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setPageNumber((prev) => ++prev);
      }
    };
    const observer = new IntersectionObserver(handleObserver);
    if (elementRef) {
      observer.observe(elementRef);
    }
    return () => {
      observer.unobserve(elementRef);
    };
  }, []);

  useEffect(() => {
    getSlicedVideosHandler(setSliceVideos, setVideosLoader, pageNumber);
  }, [pageNumber]);

  const categoryFilteredVideos = filterVideos(category, videos);
  const searchFilteredVideos = searchFilter(videos, searchQuery);

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
              {category !== "" && categoryFilteredVideos.length > 0
                ? categoryFilteredVideos
                    .slice(0, 8)
                    .map((video) => (
                      <VideoCard key={video._id} {...video} videos={videos} />
                    ))
                : null}

              {searchQuery !== "" ? (
                searchFilteredVideos.length > 0 ? (
                  searchFilteredVideos
                    .slice(0, 8)
                    .map((video) => (
                      <VideoCard key={video._id} {...video} videos={videos} />
                    ))
                ) : (
                  <div>
                    <h2>No such video exists</h2>
                  </div>
                )
              ) : null}

              {category === "" && searchQuery === "" && slicedVideos?.length > 0
                ? slicedVideos.map((video) => (
                    <VideoCard key={video._id} {...video} videos={videos} />
                  ))
                : null}
              <div ref={loader}></div>
            </div>
            {videosLoader ? <Loader /> : null}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export { Explore };
