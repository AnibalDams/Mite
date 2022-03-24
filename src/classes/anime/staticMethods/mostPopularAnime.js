import anime from '../../../schemas/anime.schema.js';


/**
   * Mostrar los animes mas populares del momento
   * @return {Promise<anime[]>} Lista con los animes mas populares
   */
const _mostPopularAnime = async () => {
  try {
    const animes = await anime.find().sort({views: -1}).limit(15);

    return animes;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default _mostPopularAnime;
