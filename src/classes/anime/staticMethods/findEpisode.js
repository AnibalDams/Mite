import episode from '../../../schemas/episodes.schema.js';


/**
   * Busca un episodio en concreto
   * @param {string} animeID ID del anime que contiene el episodio (id generado)
   * @param {string} _episode Número del episodio que queremos mostrar
   * @return {Promise<episodio>} Episodio encontrado en la base de datos
   */
const _findEpisode = async (animeID, _episode) => {
  try {
    const find = await episode.findOne({
      anime: animeID,
      episodeNumber: _episode,
    });
    if (find) {
      return find;
    } else {
      return {message: 'No se encontro ningun episodio'};
    }
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default _findEpisode;
