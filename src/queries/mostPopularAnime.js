import Anime from "../classes/anime/index.js";

const mostPopularAnime = async () => {
  try {
    const find = await Anime.mostPopularAnime();
    return find;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default mostPopularAnime;
