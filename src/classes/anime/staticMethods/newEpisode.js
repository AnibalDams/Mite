import Episode from '../../../schemas/episodes.schema.js';
import anime from '../index.js';


/**
   * Crear un nuevo episodio
   * @param {episodio} episodeData datos del episodio que queremos crear
   * @return {Promise<episodio>} Episodio agragado a la base de datos
   */
async function _newEpisode(episodeData) {
  try {
    const findAnime = await anime.findAnime(episodeData.anime);
    const _episode = new Episode({
      anime: episodeData.anime,
      episodeNumber: episodeData.episodeNumber,
      thumbnail: episodeData.thumbnail,
      episodeName: episodeData.episodeName,
      servers: episodeData.servers,
      animeName: findAnime.name,
    });
    await _episode.save();
    return _episode;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
}

export default _newEpisode;
