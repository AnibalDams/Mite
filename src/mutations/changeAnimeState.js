import Anime from '../classes/anime/index.js';

const changeAnimeState = async (animeID) => {
  try {
    const change = await Anime.changeAnimeState(animeID);
    return change;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default changeAnimeState;
