import episode from '../../../schemas/episodes.schema.js';


/**
   * Todos los episodios que tiene un anime
   * @param {string} animeId ID del anime del cual queremos ver los episodios
   * @return {Promise<episodio[]>}
   */
const _findEpisodes = async (animeID) => {
  try {
    const episodes = await episode.find({anime: animeID});

    if (episodes.length === 0) {
      return [{message: 'Este anime no cuenta con ningun episodio aun.'}];
    } else {
      return episodes;
    }
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default _findEpisodes;
