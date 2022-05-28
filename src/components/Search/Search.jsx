import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getVideos } from "../../utils";

const Search = () => {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedVideos, setSearchVideos] = useState([]);
  const [displaySearch, setDisplaySearch] = useState(false);
  const [checkDebouce, setCheckDebounce] = useState(false);
  const timerRef = useRef();
  const searchBarRef = useRef();

  useEffect(() => {
    clearTimeout(timerRef.current);
    setCheckDebounce(false);
    timerRef.current = setTimeout(() => {
      const foundVideos = videos.filter(
        (video) =>
          searchQuery.length !== 0 &&
          video.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchVideos(foundVideos);
      setCheckDebounce(true);
      setDisplaySearch(true);
    }, 300);
  }, [searchQuery]);

  const navigateHandler = (videoId) => {
    navigate(`explore/${videoId}`);
    setSearchQuery("");
  };

  const closeSearchBar = (e) => {
    if (!searchBarRef.current.contains(e.target)) {
      setDisplaySearch(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeSearchBar);

    return () => {
      document.removeEventListener("click", closeSearchBar);
    };
  }, []);

  useEffect(() => getVideos(setVideos), []);

  return (
    <div className="search" ref={searchBarRef}>
      <div className="input-search">
        <span className="btn-search">
          <i className="fas fa-search"></i>
        </span>
        <input
          type="text"
          placeholder="Search"
          className="input-search"
          onFocus={() => setDisplaySearch(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {displaySearch &&
        searchedVideos.length > 0 &&
        searchQuery.length > 0 ? (
          <ul className="search-items-container">
            {searchedVideos.map((video) => (
              <li
                key={video._id}
                className="search-item"
                onClick={() => navigateHandler(video._id)}
              >
                {video.title}
              </li>
            ))}
          </ul>
        ) : displaySearch &&
          checkDebouce &&
          searchedVideos.length === 0 &&
          searchQuery.length > 0 ? (
          <ul className="search-items-container">
            <li className="search-item">No products found</li>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export { Search };
