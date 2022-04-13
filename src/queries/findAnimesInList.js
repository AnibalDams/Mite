import Anime from '../classes/anime/index.js';

const findAnimesInList = async (userProfile) => {
  try {
    const find = await Anime.findAnimesInList(userProfile);
    return find;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default findAnimesInList;
