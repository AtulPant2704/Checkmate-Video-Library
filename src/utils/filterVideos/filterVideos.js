const filterVideos = (category, videos) => {
    if (category === "") {
        return videos;
    }
    return videos.filter(video => video.category === category);
}

export { filterVideos };
