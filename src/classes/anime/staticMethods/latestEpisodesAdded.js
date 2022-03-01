import episode from '../../../schemas/episodes.schema.js';

const latestEpisodesAdded = async () => {
  try {
    const episodes = await episode.find().sort({uploadedAt: -1}).limit(15);
    return episodes;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};


export default latestEpisodesAdded;
