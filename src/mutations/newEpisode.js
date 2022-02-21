import Anime from "../classes/anime/index.js";

const newEpisode = async (anime, episodeNumber,thumbnail, episodeName, servers) => {
  try {
    const New = await Anime.newEpisode({
      anime,
      episodeNumber,
      thumbnail,
      episodeName,
      servers,
    });
    return New;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default newEpisode;