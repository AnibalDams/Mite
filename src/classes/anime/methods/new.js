import anime from "../../../schemas/anime.schema.js";
import genre from "../../../schemas/genres.schema.js";

const newAnime = async (
  name,
  synopsis,
  color,
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
    const find = await anime.find();
    const id = find.length === 0 ? 1 : find.length + 1;
    const Anime = new anime({
      id,
      name,
      synopsis,
      color,
      image,
      cover,
      releaseDate,
      study,
      onGoing,
      genres,
      type,
      private: Private,
    });
    genres.forEach(async (el) => {
      const findGenre = await genre.findOne({ genre: el });
      if (findGenre) {
        await genre.findByIdAndUpdate(findGenre._id, {
          $inc: {
            animes: 1,
          },
        });
      } else {
        const newGenre = new genre({ genre: el });
        await newGenre.save();
      }
    });
    await Anime.save();
    return Anime;
  } catch (e) {
    console.error(e);
    throw new Error(error);
  }
};

export default newAnime;
