import Anime from '../../../schemas/anime.schema.js';
import Genre from '../../../schemas/genres.schema.js';
import {v4} from 'uuid';

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
    Private,
) => {
  try {
    const find = await Anime.find();
    const id = v4();
    const _anime = new Anime({
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
      const findGenre = await Genre.findOne({genre: el});
      if (findGenre) {
        await Genre.findByIdAndUpdate(findGenre._id, {
          $inc: {
            animes: 1,
          },
        });
      } else {
        const _newGenre = new Genre({genre: el});
        await _newGenre.save();
      }
    });
    await _anime.save();
    return _anime;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default newAnime;
