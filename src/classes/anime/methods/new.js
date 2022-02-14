import anime from "../../../schemas/anime.schema.js";

const newAnime = async (
  name,
  synopsis,
  image,
  cover,
  releaseDate,
  study,
  onGoing,
  genres,
  type,
  Private
) => {
  try {
    const Anime = new anime({
      name,
      synopsis,
      image,
      cover,
      releaseDate,
      study,
      onGoing,
      genres,
      type,
      private: Private,
    });
    await Anime.save();
    return Anime;
  } catch (e) {
    console.error(e);
    throw new Error(error);
  }
};

export default newAnime;
