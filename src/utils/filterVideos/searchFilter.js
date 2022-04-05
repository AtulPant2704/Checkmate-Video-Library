const searchFilter = (videos, searchQuery) => {
  if (searchQuery === "") {
    return videos;
  }
  return videos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

export { searchFilter };
