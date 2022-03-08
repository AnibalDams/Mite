import Episode from '../../../schemas/episodes.schema.js';
import anime from '../index.js'



async function newEpisode(episodeData) {
  try {
    const findAnime = await anime.findAnime(episodeData.anime)
    const _episode = new Episode({anime:episodeData.anime, episodeNumber:episodeData.episodeNumber,thumbnail:episodeData.thumbnail,episodeName:episodeData.episodeName,servers:episodeData.servers,animeName:findAnime.name});
    await _episode.save();
    return _episode;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
}

export default newEpisode;
