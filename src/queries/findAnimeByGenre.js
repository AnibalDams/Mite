import Anime from "../classes/anime/index.js";

const findAnimeByGenre = async (genre) => {
  try {
    const find = await Anime.findAnimeByGenre(genre);
    return find;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default findAnimeByGenre;
