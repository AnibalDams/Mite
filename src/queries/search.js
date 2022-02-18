import Anime from "../classes/anime/index.js";

const searchAnime = async (searchIndex) => {
  try {
    const search = await Anime.search(searchIndex);
    return search;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default searchAnime;
