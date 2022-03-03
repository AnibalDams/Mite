import Anime from '../classes/anime/index.js';

const findGenres = async () => {
  try {
    const find = await Anime.findGenres();
    return find;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default findGenres;
