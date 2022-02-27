import episode from "../../../schemas/episodes.schema.js";

const findEpisodes = async (animeID) => {
  try {
    const episodes = await episode.find({ anime: animeID });

    if (episodes.length === 0) {
      return [{ message: "Este anime no cuenta con ningun episodio aun." }];
    } else {
      return episodes;
    }
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default findEpisodes;
