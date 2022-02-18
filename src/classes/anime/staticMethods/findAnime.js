import anime from "../../../schemas/anime.schema.js";
import genre from "../../../schemas/genres.schema.js";

const findAnime = async (animeID) => {
  try {
    const Anime = await anime.findOne({ id: animeID });
    if (Anime) {
      return Anime;
    } else {
      return { message: "El anime solicitado no existe." };
    }
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default findAnime;
