import Anime from '../classes/anime/index.js';

const deleteAnime = async (animeID) => {
  try {
    const _delete = await Anime.deleteAnime(animeID);
    return _delete;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default deleteAnime;
