import Anime from '../classes/anime/index.js';

const latestEpisodesAdded = async () => {
  try {
    const find = await Anime.latestEpisodesAdded();
    return find;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default latestEpisodesAdded;
