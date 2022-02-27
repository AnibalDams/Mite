import anime from "../../../schemas/anime.schema.js";

const mostPopularAnime = async () => {
  try {
    const animes = await anime.find().sort({ views: -1 }).limit(15);

    return animes;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default mostPopularAnime;
