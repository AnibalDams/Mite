import episode from "../../../schemas/episodes.schema.js";

async function newEpisode(episodeData) {
  try {
    const _episode = new episode(episodeData);
    await _episode.save();
    return _episode;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
}

export default newEpisode;
