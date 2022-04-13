import Anime from '../classes/anime/index.js';

const findAnimeInList = async (animeId, userProfile) => {
  try {
    const find = await Anime.findAnimeInList(animeId, userProfile);
    return find;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default findAnimeInList;
