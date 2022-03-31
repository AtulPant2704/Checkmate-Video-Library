import "./Explore.css";
import { useState, useEffect } from "react";
import { useVideos, useCategory } from "../../hooks";
import { Drawer, VideoCard } from "../../components";
import { getCategoriesHandler, filterVideos } from "../../utils";

const Explore = () => {
    const [categories, setCategories] = useState([]);
    const videos = useVideos();
    const { categoryState: { category }, categoryDispatch } = useCategory();

    useEffect(() => getCategoriesHandler(setCategories), []);

    const filteredVideos = filterVideos(category, videos);

    return (
        <main>
            <div className="explore-page">
                <Drawer />
                <section className="videos-section">
                    <div className="video-categories">
                        <button
                            className={`btn btn-outline-primary ${category === "" ? "active" : ""}`}
                            onClick={() => categoryDispatch({ type: "CLEAR_CATEGORY" })}>All
                        </button>
                        {categories.map(curr => (
                            <button
                                className={`btn btn-outline-primary ${category === curr.categoryName ? "active" : ""}`}
                                key={curr._id}
                                onClick={() => categoryDispatch({ type: "SELECT_CATEGORY", payload: curr.categoryName })}>{curr.categoryName}
                            </button>
                        ))}
                    </div>
                    <div className="videos-container">
                        {filteredVideos.map(video => (
                            <VideoCard key={video._id} {...video} />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}

export { Explore };
