import anime from '../../../schemas/anime.schema.js';

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

/**
   * Buscar animes atraves de su nombre {@link _searchAnime}
   * @param {string} searchIndex Nombre del anime que queremos buscar
   * @return {Promise<anime[]>} lista con los animes que coincida con el termino que ingresamos
   * @example
   * const buscarAnime = await Anime.search("One Piece"); // Anime
   */
async function _search(searchIndex) {
  try {
    const regex = new RegExp(escapeRegex(searchIndex), 'gi');
    const _animes = await anime.find({name: regex});

    if (_animes.length === 0) {
      return [{message: 'No se encontro nungun anime.'}];
    } else {
      return _animes;
    }
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export default _search;
