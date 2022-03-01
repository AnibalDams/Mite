import Anime from '../classes/anime/index.js';

const findEpisodes = async (animeId) => {
  try {
    const find = await Anime.findEpisodes(animeId);
    return find;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default findEpisodes;
