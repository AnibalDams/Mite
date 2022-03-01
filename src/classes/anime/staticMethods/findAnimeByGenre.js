import anime from '../../../schemas/anime.schema.js';

const findAnimeByGenre = async (genre) => {
  try {
    const allAnimes = await anime.find({private: false});
    const animesWithThisGenre = [];
    for (let i = 0; i < allAnimes.length; i++) {
      const Anime = allAnimes[i];
      for (let i = 0; i < Anime.genres.length; i++) {
        const animeGenre = Anime.genres[i];
        if (animeGenre === genre) {
          animesWithThisGenre.push(Anime);
        }
      }
    }
    if (animesWithThisGenre.length > 0) {
      return animesWithThisGenre;
    } else {
      return [{message: 'No se encontro ningun anime con este genero'}];
    }
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default findAnimeByGenre;
