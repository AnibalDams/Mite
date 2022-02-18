import Anime from "../classes/anime/index.js";

const newEpisode = async (anime, episodeNumber, episodeName, servers) => {
  try {
    const New = await Anime.newEpisode({
      anime,
      episodeNumber,
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