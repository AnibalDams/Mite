import Anime from "../classes/anime/index.js";

const findAnime = async (animeID) => {
  try {
    const find = await Anime.findAnime(animeID);
    return find;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default findAnime;
