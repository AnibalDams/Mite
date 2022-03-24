import episode from '../../../schemas/episodes.schema.js';


/**
   * Muestra los ultimos episodios agreados sin importar el anime que sea
   * @return {Promise<episodio[]>} Lista con los ultimos episodios agregados
   */
const _latestEpisodesAdded = async () => {
  try {
    const episodes = await episode.find().sort({uploadedAt: -1}).limit(15);
    return episodes;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default _latestEpisodesAdded;
