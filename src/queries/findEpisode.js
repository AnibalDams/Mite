import Anime from '../classes/anime/index.js';

const findEpisode = async (animeId, episode) => {
  try {
    const find = await Anime.findEpisode(animeId, episode);
    return find;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default findEpisode;
