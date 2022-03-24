import anime from '../../../schemas/anime.schema.js';


/**
   * Mostrar los animes guardados, divididos por paginación
   * @param {number} page Número de la pagina
   * @param {number} limit Limite de animes que se muestra en una pagina
   * @return {Promise<anime[]>} Retorna un array con los animes encontrados
   */
const _find = async (page, limit) => {
  const skipIndex = (page - 1) * limit;
  try {
    const animes = await anime
        .find({private: false})
        .sort({releaseDate: -1})
        .limit(limit)
        .skip(skipIndex);

    return animes;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default _find;
