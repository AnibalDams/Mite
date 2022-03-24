import anime from '../../../schemas/anime.schema.js';


/**
   * Ultimos animes agregados a la base de datos
   * @return {Promise<anime[]>} Lista con los ultimos animes agregados
   */
const _latestAnimesAdded = async () => {
  try {
    const animes = await anime.find().sort({uploadedAt: -1}).limit(15);
    return animes;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default _latestAnimesAdded;
