import Anime from '../classes/anime/index.js';

const latestAnimesAdded = async () => {
  try {
    const find = await Anime.latestAnimesAdded();
    return find;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default latestAnimesAdded;
