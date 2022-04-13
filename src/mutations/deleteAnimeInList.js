import Anime from '../classes/anime/index.js';

const deleteAnimeInList = async (animeId) => {
  try {
    const _delete = await Anime.deleteAnimeInList(animeId);
    return _delete;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default deleteAnimeInList;
