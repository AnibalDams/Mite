import episode from '../../../schemas/episodes.schema.js';

const findEpisode = async (animeID, _episode) => {
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

export default findEpisode;
