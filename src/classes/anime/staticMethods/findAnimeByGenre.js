import anime from '../../../schemas/anime.schema.js';


/**
   * Buscar todos los animes de un genero determinado
   * @param {string} genre Genero el cual queremos ver los animes
   * @return {Array<anime>} Retorna una lista con los animes del genero proveido
   */
const _findAnimeByGenre = async (genre) => {
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

export default _findAnimeByGenre;
