import Anime from "../classes/anime/index.js";

const findAll = async (page, limit) => {
  try {
    const find = await Anime.find(page, limit);
    return find;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default findAll;
