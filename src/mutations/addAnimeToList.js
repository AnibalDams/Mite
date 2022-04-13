import anime from '../classes/anime/index.js';

const AddAnimeToList = async (animeId, animeName, animeSynopsis, animeMain, animeCover, userProfile) => {
  try {
    const add = await anime.addAnimeToList(animeId, animeName, animeSynopsis, animeMain, animeCover, userProfile);
    return add;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default AddAnimeToList;
